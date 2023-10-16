import type { ProFormInstance } from '@ant-design/pro-components';
import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { Divider, message } from 'antd';
import { useRef, useState } from 'react';

export type CreateConversationProps = {
  intl?: any;
  modalVisible?: boolean;
  setModalVisible?: any;
};

const CreateConversation: React.FC<CreateConversationProps> = ({
  intl,
  modalVisible,
  setModalVisible,
}) => {
  const restFormRef = useRef<ProFormInstance>();
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <ModalForm
        title={
          <>
            {intl.formatMessage({ id: 'conversation.modal.title' })} <Divider />
          </>
        }
        formRef={restFormRef}
        width={400}
        open={modalVisible}
        onOpenChange={setModalVisible}
        submitter={{
          searchConfig: {
            submitText: <>{intl.formatMessage({ id: 'conversation.modal.button' })}</>,
          },
          resetButtonProps: {
            style: {
              display: 'none',
            },
          },
          submitButtonProps: {
            style: {
              width: 352,
            },
          },
        }}
        onFinish={async (values) => {
          console.log(values);
          const defaultLoginSuccessMessage = intl.formatMessage({
            id: 'conversation.modal.succeess',
            defaultMessage: 'success!',
          });
          messageApi.success(defaultLoginSuccessMessage);
          return true;
        }}
      >
        <ProFormText
          width="lg"
          name="recipient"
          placeholder=""
          label={intl.formatMessage({
            id: 'conversation.modal.input.recipient',
            defaultMessage: 'Recipient',
          })}
          tooltip={intl.formatMessage({
            id: 'conversation.modal.input.recipient.tooltip',
            defaultMessage: 'Send to recipient',
          })}
        />

        <ProFormTextArea
          colProps={{ span: 10 }}
          name="message"
          placeholder=""
          label={intl.formatMessage({
            id: 'conversation.modal.input.message',
            defaultMessage: 'Message (optional)',
          })}
        />
      </ModalForm>
    </>
  );
};

export default CreateConversation;
