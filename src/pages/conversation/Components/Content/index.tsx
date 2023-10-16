import React, { useState } from 'react';
import { Content } from 'antd/es/layout/layout';
import styles from './index.less';
import { useParams } from '@umijs/max';

export type ContentProps = {
  intl?: any;
};

const ContentConversation: React.FC<ContentProps> = ({ intl }) => {
  console.log('useParams', useParams());
  return (
    <Content className={styles.content}>
      <div className={styles.contentChat}>content</div>
    </Content>
  );
};

export default ContentConversation;
