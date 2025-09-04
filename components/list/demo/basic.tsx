import React from 'react';
import { Avatar, List } from 'antd';

const data = [
  {
    title: 'gui Title 1',
  },
  {
    title: 'gui Title 2',
  },
  {
    title: 'gui Title 3',
  },
  {
    title: 'gui Title 4',
  },
];

const App: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="gui, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
);

export default App;
