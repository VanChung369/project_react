import { PATH } from '@/constants/path';
import Layout from '@/layouts/public';
import { login } from '@/services/api/api';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { FormattedMessage, Link, history, useIntl, useModel } from '@umijs/max';
import { message } from 'antd';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import styles from './index.less';
import AlertMessage from '@/components/AlertMessage';

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const { initialState, setInitialState } = useModel('@@initialState');
  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();

    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      const msg = await login({ ...values });
      if (msg.status === 'ok') {
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: 'success!',
        });
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        return;
      }

      setUserLoginState(msg);
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: 'Login failed, please try again!',
      });
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };
  const { status } = userLoginState;

  return (
    <Layout id="menu.login" defaultMessage="Login page" intl={intl}>
      <LoginForm
        contentStyle={{
          minWidth: 280,
          maxWidth: '75vw',
        }}
        title={intl.formatMessage({ id: 'pages.layouts.userLayout.title' })}
        initialValues={{
          autoLogin: true,
        }}
        onFinish={async (values) => {
          await handleSubmit(values as API.LoginParams);
        }}
      >
        {status === 'error' && (
          <AlertMessage
            content={intl.formatMessage({
              id: 'pages.login.accountLogin.errorMessage',
              defaultMessage: 'Incorrect username/password',
            })}
          />
        )}

        <div className={styles.group}>
          <ProFormText
            name="email"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined />,
            }}
            placeholder={intl.formatMessage({
              id: 'pages.login.username.placeholder',
              defaultMessage: 'Enter your email address',
            })}
            rules={[
              {
                type: 'email',
                message: (
                  <FormattedMessage
                    id="pages.login.type.required"
                    defaultMessage="The input is not valid E-mail!"
                  />
                ),
              },
              {
                required: true,
                message: (
                  <FormattedMessage
                    id="pages.login.username.required"
                    defaultMessage="please enter your email!"
                  />
                ),
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined />,
            }}
            placeholder={intl.formatMessage({
              id: 'pages.login.password.placeholder',
              defaultMessage: 'Enter your password',
            })}
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage
                    id="pages.login.password.required"
                    defaultMessage="Please enter the password!"
                  />
                ),
              },
            ]}
          />
        </div>

        <div
          style={{
            marginBottom: 24,
          }}
        >
          <FormattedMessage id="user.notAccount" defaultMessage="Don't have an account?" />
          <Link to={PATH.REGISTER}>
            <FormattedMessage id="user.register" defaultMessage="Register" />
          </Link>
        </div>
      </LoginForm>
    </Layout>
  );
};

export default Login;
