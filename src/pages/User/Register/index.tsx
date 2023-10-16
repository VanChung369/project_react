import { PATH } from '@/constants/path';
import Layout from '@/layouts/public';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { FormattedMessage, Link, useIntl, useModel, history } from '@umijs/max';
import { message } from 'antd';
import React, { useState } from 'react';
import styles from './index.less';
import { register } from '@/services/api/register';

const Register: React.FC = () => {
  const intl = useIntl();
  const handleSubmit = async (values: API.LoginParams) => {
    try {
      const msg = await register({ ...values });

      if (msg.status === 'ok') {
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.register.success',
          defaultMessage: 'success!',
        });
        message.success(defaultLoginSuccessMessage);

        history.push(PATH.LOGIN);
        return;
      }
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: 'Login failed, please try again!',
      });
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <Layout id="user.register" defaultMessage="Register" intl={intl}>
      <LoginForm
        contentStyle={{
          minWidth: 180,
          maxWidth: '100vw',
        }}
        title={intl.formatMessage({ id: 'user.page.register' })}
        initialValues={{
          autoLogin: true,
        }}
        submitter={{
          searchConfig: { submitText: intl.formatMessage({ id: 'user.createAccount' }) },
        }}
        onFinish={async (values) => {
          await handleSubmit(values as API.RegisterParams);
        }}
      >
        <>
          <ProForm.Group spaceProps={{ className: styles.group }}>
            <ProFormText
              name="firstName"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined />,
              }}
              placeholder={intl.formatMessage({
                id: 'user.fistName',
                defaultMessage: 'Enter your name',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.username.required"
                      defaultMessage="please enter user name!"
                    />
                  ),
                },
              ]}
            />
            <ProFormText
              name="lastName"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined />,
              }}
              placeholder={intl.formatMessage({
                id: 'user.lastName',
                defaultMessage: 'Enter your last name',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.username.required"
                      defaultMessage="please enter user name!"
                    />
                  ),
                },
              ]}
            />
          </ProForm.Group>

          <ProFormText
            name="email"
            fieldProps={{
              size: 'large',
              prefix: <MailOutlined />,
            }}
            placeholder={intl.formatMessage({
              id: 'user.placeholder.email',
              defaultMessage: 'Enter your email',
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
                    defaultMessage="please enter user name!"
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
              id: 'user.placeholder.password',
              defaultMessage: 'Enter password',
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
        </>

        <div className={styles.linkLogin}>
          <FormattedMessage id="user.haveAccount" defaultMessage="Already have an account" />
          <Link to={PATH.LOGIN}>
            <FormattedMessage id="user.login" defaultMessage="Login" />
          </Link>
        </div>
      </LoginForm>
    </Layout>
  );
};

export default Register;
