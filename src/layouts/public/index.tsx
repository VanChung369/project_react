import { Footer } from '@/layouts';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Helmet, SelectLang } from '@umijs/max';
import React, { ReactNode } from 'react';
import Settings from '../../../config/defaultSettings';

const Lang = () => {
  const langClassName = useEmotionCss(({ token }) => {
    return {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    };
  });

  return (
    <div className={langClassName} data-lang>
      {SelectLang && <SelectLang />}
    </div>
  );
};

export type LayoutProps = {
  id?: string;
  defaultMessage?: string;
  children?: ReactNode;
  intl?: any;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });

  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          {props.intl.formatMessage({
            id: props.id,
            defaultMessage: props.defaultMessage,
          })}
          - {Settings.title}
        </title>
      </Helmet>
      <Lang />
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
