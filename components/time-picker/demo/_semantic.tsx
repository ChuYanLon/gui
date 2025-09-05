import React from 'react';
import { TimePicker } from 'gzj-ui';

import { PickerSemanticTemplate } from '../../date-picker/demo/_semantic';

const App: React.FC = () => {
  return (
    <PickerSemanticTemplate
      singleComponent={['TimePicker', TimePicker]}
      multipleComponent={['TimePicker.RangePicker', TimePicker.RangePicker]}
    />
  );
};

export default App;
