import React from 'react';
import { Pagination } from 'gzj-ui';

const App: React.FC = () => <Pagination defaultCurrent={5} total={100} showSizeChanger={false} />;

export default App;
