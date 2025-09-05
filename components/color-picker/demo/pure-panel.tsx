import React, { useState } from 'react';
import { ColorPicker } from 'gzj-ui';
import type { ColorPickerProps, GetProp } from 'gzj-ui';

const { _InternalPanelDoNotUseOrYouWillBeFired: PureRenderColorPicker } = ColorPicker;

type Color = GetProp<ColorPickerProps, 'value'>;

const Demo: React.FC = () => {
  const [color, setColor] = useState<Color>('#1677ff');
  return (
    <div style={{ paddingInlineStart: 100 }}>
      <PureRenderColorPicker value={color} onChange={setColor} />
    </div>
  );
};

export default Demo;
