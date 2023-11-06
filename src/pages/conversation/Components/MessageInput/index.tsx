import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';
import { ProForm, ProFormTextArea } from '@ant-design/pro-components';
import { createMessageConversation } from '@/services/api/message';

export type MessageProps = {
  id?: string;
};

const MessageInput: React.FC<MessageProps> = ({ id }) => {
  const [form] = ProForm.useForm();
  const handleSubmit = async (values: API.CreateMessageParams) => {
    try {
      const msg = await createMessageConversation({ ...values });
      if (msg.status === 'ok') {
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  return (
    <div className={styles.messageInputContainer}>
      <ProForm
        form={form}
        onKeyDown={async (event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            const content = form.getFieldValue('message');
            await handleSubmit({ conversationId: parseInt(id!), content: content });
            form.resetFields();
          }
        }}
        isKeyPressSubmit={true}
        initialValues={{
          message: '',
        }}
        submitter={{
          resetButtonProps: {
            style: {
              display: 'none',
            },
          },
          submitButtonProps: {
            style: {
              display: 'none',
            },
          },
        }}
        autoFocusFirstInput
      >
        <ProFormTextArea
          className={styles.messageInput}
          name="message"
          placeholder="Aa"
          allowClear={false}
          fieldProps={{
            onKeyDown: (e) => {
              if (e.shiftKey && e.key === 'Enter') {
              } else if (e.key === 'Enter') {
                e.preventDefault();
              }
            },
            autoSize: { minRows: 1, maxRows: 3 },
          }}
        />
      </ProForm>
    </div>
  );
};

export default MessageInput;
