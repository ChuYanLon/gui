import React from 'react';
import { Tooltip } from 'gzj-ui';

const App: React.FC = () => (
  <Tooltip destroyOnHidden title="prompt text">
    <span>Dom will destroyed when Tooltip close</span>
  </Tooltip>
);

export default App;
