import React, { useEffect, useState } from 'react';
import styles from './index.less';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Skeleton } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { formatRelative } from 'date-fns';
import { useModel } from '@umijs/max';

export type MessageContainerProps = {
  messages: API.MessageItem[];
  setMessages: any;
};

const MessageContainer: React.FC<MessageContainerProps> = ({ messages, setMessages }) => {
  const [loading, setLoading] = useState(false);
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  const loadMoreData = () => {};

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <div
      id="scrollableDiv"
      style={{
        display: 'flex',
        flexDirection: 'column-reverse',
      }}
      className={styles.messageContainer}
    >
      <InfiniteScroll
        dataLength={messages.length}
        next={loadMoreData}
        hasMore={true}
        inverse={true}
        height={'calc(100vh - 200px)'}
        className={styles.infiniteScroll}
        style={{ display: 'flex', flexDirection: 'column-reverse' }}
        loader={<Skeleton paragraph={{ rows: 1 }} active />}
        scrollableTarget="scrollableDiv"
      >
        {messages.map((item, index, arr) => {
          const currentMessage = arr[index];
          const nextMessage = arr[index + 1];
          if (arr.length === index + 1) {
            return (
              <div className={styles.messageItemContainer} key={item.id}>
                <Avatar size={40} icon={<UserOutlined />} className={styles.messageItemAvatar} />
                <div className={styles.messageItemDetails}>
                  <div className={styles.messageItemDetails__header}>
                    <span
                      className={styles.messageItemDetails__header__author}
                      style={{ color: currentUser?.id === item.author?.id ? '#fff' : '#1da1f2' }}
                    >
                      {item.author?.firstName} {item.author?.lastName}
                    </span>
                    <span className={styles.messageItemDetails__header__time}>
                      {formatRelative(new Date(item.createAt), new Date())}
                    </span>
                  </div>

                  <div className={styles.messageItemDetails__content}>{item.content}</div>
                </div>
              </div>
            );
          }
          if (currentMessage.author?.id === nextMessage.author?.id) {
            return (
              <div className={styles.messageItemContainer} key={item.id}>
                <div style={{ padding: '0 0 0 55px' }} className={styles.messageItemDetails}>
                  <div className={styles.messageItemDetails__content}>{item.content}</div>
                </div>
              </div>
            );
          } else {
            return (
              <div className={styles.messageItemContainer} key={item.id}>
                <Avatar size={40} icon={<UserOutlined />} className={styles.messageItemAvatar} />
                <div className={styles.messageItemDetails}>
                  <div className={styles.messageItemDetails__header}>
                    <span
                      className={styles.messageItemDetails__header__author}
                      style={{ color: currentUser?.id === item.author?.id ? '#fff' : '#1da1f2' }}
                    >
                      {item.author?.firstName} {item.author?.lastName}
                    </span>
                    <span className={styles.messageItemDetails__header__time}>
                      {formatRelative(new Date(item.createAt), new Date())}
                    </span>
                  </div>

                  <div className={styles.messageItemDetails__content}>{item.content}</div>
                </div>
              </div>
            );
          }
        })}
      </InfiniteScroll>
    </div>
  );
};

export default MessageContainer;
