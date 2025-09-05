import React from 'react';
import { Watermark } from 'gzj-ui';

const App: React.FC = () => (
  <Watermark content={['gui', 'Happy Working']}>
    <div style={{ height: 500 }} />
  </Watermark>
);

export default App;
