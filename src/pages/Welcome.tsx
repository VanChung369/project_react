import { PageContainer } from '@ant-design/pro-components';
import React from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Welcome: React.FC = () => {
  return <PageContainer></PageContainer>;
};

export default Welcome;
