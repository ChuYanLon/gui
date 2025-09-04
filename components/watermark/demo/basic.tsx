import React from 'react';
import { Watermark } from 'antd';

const App: React.FC = () => (
  <Watermark content="gui">
    <div style={{ height: 500 }} />
  </Watermark>
);

export default App;
