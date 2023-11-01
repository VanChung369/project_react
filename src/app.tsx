import { currentUser as queryCurrentUser } from '@/services/api/login';
import { LinkOutlined } from '@ant-design/icons';
import { PageLoading, SettingDrawer, Settings as LayoutSettings } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history, Link } from '@umijs/max';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import defaultSettings from '../config/defaultSettings';
import RightContent from './layouts/RightContent';
import { default as Page403 } from './pages/exception/403';
import { default as Page404 } from './pages/exception/404';
import { persistor, store } from './redux/store';
import { errorConfig } from './utils/requestErrorConfig';
import { PATH } from './constants/path';
import { SocketContext, socket } from './context/socket';

const isDev = process.env.NODE_ENV === 'development';

export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser({
        skipErrorHandler: true,
      });
      return msg.data;
    } catch (error) {
      history.push(PATH.LOGIN);
    }
    return undefined;
  };
  const { location } = history;
  if (location.pathname !== PATH.LOGIN && location.pathname !== PATH.REGISTER) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings as Partial<LayoutSettings>,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  const onBeforeLift: any = (store: any) => () => {
    const state = store.getState();
    console.log(state);
  };

  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    unAccessible: <Page403 />,
    headerRender: false,
    collapsedButtonRender: () => undefined,
    // menuExtraRender: () => <div>Conversation</div>,
    noFound: <Page404 />,
    footerRender: false,
    onPageChange: () => {
      const { location } = history;
      if (!initialState?.currentUser && location.pathname !== PATH.LOGIN) {
        history.push(PATH.LOGIN);
      }
    },
    layoutBgImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,

    childrenRender: (children) => {
      if (initialState?.loading) return <PageLoading />;

      return (
        <>
          <SocketContext.Provider value={socket}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor} onBeforeLift={onBeforeLift(store)}>
                {children}
              </PersistGate>
            </Provider>
          </SocketContext.Provider>
          {isDev && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

export const request = {
  ...errorConfig,
};
