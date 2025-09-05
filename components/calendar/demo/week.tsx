import React from 'react';
import { Calendar } from 'gzj-ui';

const App: React.FC = () => (
  <>
    <Calendar fullscreen showWeek />
    <br />
    <Calendar fullscreen={false} showWeek />
  </>
);

export default App;
