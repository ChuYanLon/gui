import React from 'react';
import { Checkbox } from 'gzj-ui';
import type { CheckboxProps } from 'gzj-ui';

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const App: React.FC = () => <Checkbox onChange={onChange}>Checkbox</Checkbox>;

export default App;
