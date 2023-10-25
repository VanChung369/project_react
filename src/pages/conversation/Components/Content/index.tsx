import React, { useEffect, useState } from 'react';
import { Content } from 'antd/es/layout/layout';
import styles from './index.less';
import { useParams, useRequest } from '@umijs/max';
import { getMessageConversationById } from '@/services/api/message';
import MessageContainer from '../MessageContainer';
import MessageInput from '../MessageInput';

export type ContentProps = {
  intl?: any;
};

const ContentConversation: React.FC<ContentProps> = ({ intl }) => {
  const { id } = useParams();

  const [messages, setMessages] = useState<API.MessageItem[]>([]);

  const { data } = useRequest(
    () => getMessageConversationById({ conversationId: id ? parseInt(id) : 1 }),
    {
      refreshDeps: [id],
    },
  );

  useEffect(() => {
    setMessages(data || []);
  }, [data]);

  return (
    <Content className={styles.content}>
      <MessageContainer messages={messages} setMessages={setMessages} />
      <MessageInput />
    </Content>
  );
};

export default ContentConversation;
