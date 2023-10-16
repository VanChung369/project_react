import { Alert } from 'antd';

const AlertMessage: React.FC<{
  content: string;
  type?: 'success' | 'warning' | 'error' | 'info' | undefined;
}> = ({ content, type }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type={type || 'error'}
      showIcon
    />
  );
};

export default AlertMessage;
