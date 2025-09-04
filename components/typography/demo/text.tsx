import React from 'react';
import { Space, Typography } from 'antd';

const { Text, Link } = Typography;

const App: React.FC = () => (
  <Space direction="vertical">
    <Text>gui (default)</Text>
    <Text type="secondary">gui (secondary)</Text>
    <Text type="success">gui (success)</Text>
    <Text type="warning">gui (warning)</Text>
    <Text type="danger">gui (danger)</Text>
    <Text disabled>gui (disabled)</Text>
    <Text mark>gui (mark)</Text>
    <Text code>gui (code)</Text>
    <Text keyboard>gui (keyboard)</Text>
    <Text underline>gui (underline)</Text>
    <Text delete>gui (delete)</Text>
    <Text strong>gui (strong)</Text>
    <Text italic>gui (italic)</Text>
    <Link href="https://ant.design" target="_blank">
      gui (Link)
    </Link>
  </Space>
);

export default App;
