import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const App: React.FC = () => (
  <>
    <Title>h1. gui</Title>
    <Title level={2}>h2. gui</Title>
    <Title level={3}>h3. gui</Title>
    <Title level={4}>h4. gui</Title>
    <Title level={5}>h5. gui</Title>
  </>
);

export default App;
