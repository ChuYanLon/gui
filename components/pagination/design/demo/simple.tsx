import React from 'react';
import { Pagination } from 'gzj-ui';

const App: React.FC = () => (
  <Pagination defaultCurrent={2} total={50} showSizeChanger={false} simple />
);

export default App;
