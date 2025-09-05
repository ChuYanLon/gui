import type { FC } from 'react';
import React from 'react';
import { DatePicker } from 'gzj-ui';

const { _InternalPanelDoNotUseOrYouWillBeFired: PureDatePicker } = DatePicker;

const Demo: FC = () => <PureDatePicker showTime />;

export default Demo;
