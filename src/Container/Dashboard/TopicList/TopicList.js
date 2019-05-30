import React from "react";
import { Menu } from "antd";

function TopicList(props) {
  const { topics, changeActiveTopic, activeTopic } = props;
  return (
    <Menu 
      mode="inline" 
      defaultSelectedKeys={[activeTopic]}
    >
      {topics.map((topic, index) => (
        <Menu.Item
          onClick={e => {
            changeActiveTopic(topic);
          }}
          key={topic}
        >
          {topic}
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default TopicList;
