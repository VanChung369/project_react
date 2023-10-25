import { Avatar, Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Sider } = Layout;
import { PlusSquareOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import styles from './index.less';
import { FormattedMessage, useModel, useNavigate, useParams } from '@umijs/max';
import CreateConversation from '../CreateConversation';

export type SiderProps = {
  intl?: any;
  conversation?: API.ConversationItem[];
};

const SiderBar: React.FC<SiderProps> = ({ intl, conversation }) => {
  const navigate = useNavigate();
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const { id } = useParams();

  const getDisplayUser = (conversation: API.ConversationItem) => {
    return conversation?.creator?.id === currentUser?.id
      ? conversation?.recipient
      : conversation?.creator;
  };

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <>
      <CreateConversation
        intl={intl}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Sider
        className={styles.sider_bar}
        breakpoint="lg"
        width={350}
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        trigger={null}
      >
        <div className={styles.sider_bar_header}>
          <h1>
            <FormattedMessage id="conversation.text" defaultMessage="Conversations" />
          </h1>
          <PlusSquareOutlined
            onClick={() => {
              setModalVisible(true);
            }}
          />
        </div>
        <Menu
          className={styles.sider_bar_menu}
          mode="inline"
          theme="dark"
          onClick={(info) => navigate(`/conversations/${info.key}`)}
          defaultSelectedKeys={[id ? id : '']}
          items={conversation?.map((conversation, index) => ({
            key: conversation.id,
            icon: <Avatar size="large" icon={<UserOutlined />} />,
            label: (
              <>
                <span className={styles.sider_bar_menu__name}>
                  {`${getDisplayUser(conversation)?.firstName} ${getDisplayUser(conversation)
                    ?.lastName}`}
                </span>
                <span className={styles.sider_bar_menu__lastMessage}>this is message</span>
              </>
            ),
          }))}
        />
      </Sider>
    </>
  );
};

export default SiderBar;
