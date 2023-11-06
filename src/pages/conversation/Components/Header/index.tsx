import React, { useState } from 'react';
import styles from './index.less';
import { Header } from 'antd/es/layout/layout';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

export type HeaderProps = {
  conversationAction?: API.ConversationItem;
};
const HeaderConversation: React.FC<HeaderProps> = ({ conversationAction }) => {
  return (
    <Header className={styles.header}>
      <Avatar size={40} icon={<UserOutlined />} className={styles.header__item_avatar} />
      <span className={styles.header__name}>{conversationAction?.recipient?.lastName}</span>
    </Header>
  );
};

export default HeaderConversation;
