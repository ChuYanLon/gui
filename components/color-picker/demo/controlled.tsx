import React, { useState } from 'react';
import { ColorPicker, Space } from 'gzj-ui';
import type { ColorPickerProps, GetProp } from 'gzj-ui';

type Color = GetProp<ColorPickerProps, 'value'>;

const Demo: React.FC = () => {
  const [color, setColor] = useState<Color>('#1677ff');

  return (
    <Space>
      <ColorPicker value={color} onChange={setColor} />
      <ColorPicker value={color} onChangeComplete={setColor} />
    </Space>
  );
};

export default Demo;
