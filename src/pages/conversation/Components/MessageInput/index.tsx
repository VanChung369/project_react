import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { ProFormText, ProFormTextArea } from '@ant-design/pro-components';

const MessageInput: React.FC = () => {
  return (
    <div className={styles.messageInputContainer}>
      <ProFormTextArea
        className={styles.messageInput}
        name="message"
        placeholder="Aa"
        allowClear={false}
        fieldProps={{
          autoSize: { minRows: 1, maxRows: 3 },
        }}
      />
    </div>
  );
};

export default MessageInput;
