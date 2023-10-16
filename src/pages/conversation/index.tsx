import { Outlet, useIntl } from '@umijs/max';
import React, { useEffect, useState } from 'react';
import SiderBar from './Components/Sider';
import { Layout } from 'antd';
import HeaderConversation from './Components/Header';
import { useRequest } from 'umi';
import { getConversation } from '@/services/api/conversation';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Conversation: React.FC = () => {
  const intl = useIntl();

  const [conversation, setConversation] = useState<API.ConversationItem[]>([]);
  const { data } = useRequest(getConversation);

  useEffect(() => {
    setConversation(data || []);
  }, [data]);

  return (
    <Layout hasSider>
      <SiderBar intl={intl} conversation={conversation} />
      <Layout>
        <HeaderConversation />
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default Conversation;
