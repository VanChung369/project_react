import React, { useContext, useEffect, useState } from 'react';
import { Content } from 'antd/es/layout/layout';
import styles from './index.less';
import { useParams, useRequest } from '@umijs/max';
import { getMessageConversationById } from '@/services/api/message';
import MessageContainer from '../MessageContainer';
import MessageInput from '../MessageInput';
import { SocketContext } from '@/context/socket';

export type ContentProps = {
  intl?: any;
};

const ContentConversation: React.FC<ContentProps> = ({ intl }) => {
  const { id } = useParams();
  const socket = useContext(SocketContext);

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

  useEffect(() => {
    socket.on('connected', () => console.log('connected'));
    socket.on('onMessage', (payload: API.MessageEventPayload) => {
      const { conversation, ...message } = payload;
      setMessages((prev) => [message, ...prev]);
    });
    return () => {
      socket.off('connected');
      socket.off('onMessage');
    };
  }, []);

  return (
    <Content className={styles.content}>
      <MessageContainer messages={messages} setMessages={setMessages} />
      <MessageInput id={id} />
    </Content>
  );
};

export default ContentConversation;
