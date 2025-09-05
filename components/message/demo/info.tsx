import React from 'react';
import { Button, message } from 'gzj-ui';

const info = () => {
  message.info('This is a normal message');
};

const App: React.FC = () => (
  <Button type="primary" onClick={info}>
    Static Method
  </Button>
);

export default App;
