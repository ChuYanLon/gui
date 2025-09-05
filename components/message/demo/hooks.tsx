import React from 'react';
import { Button, message } from 'gzj-ui';

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info('Hello, gui!');
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </>
  );
};

export default App;
