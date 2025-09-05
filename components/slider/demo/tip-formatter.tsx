import React from 'react';
import type { SliderSingleProps } from 'gzj-ui';
import { Slider } from 'gzj-ui';

const formatter: NonNullable<SliderSingleProps['tooltip']>['formatter'] = (value) => `${value}%`;

const App: React.FC = () => (
  <>
    <Slider tooltip={{ formatter }} />
    <Slider tooltip={{ formatter: null }} />
  </>
);

export default App;
