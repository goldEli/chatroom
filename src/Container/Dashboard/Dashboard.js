import React, { useContext, useState } from "react";
import styled from "styled-components";
import { PageHeader, Input, Button } from "antd";

import TopicList from "./TopicList/TopicList";
import Dialog from "./Dialog/Dialog";

import { ctx } from "./Store";

const { TextArea } = Input;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Header = styled.div`
  height: 64px;
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const SideLeft = styled.div`
  border-right: 1px solid grey;
  width: 300px;
`;
const SideRight = styled.div`
  padding: 5px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const DialogBox = styled.div`
  flex: 1;
`;

const MessageInputBox = styled.div`
  height: 60px;
`;

function Dashboard() {
  const { allCharts, sendMessageAction, user } = useContext(ctx);
  const topics = Object.keys(allCharts);
  const [activeTopic, changeActiveTopic] = useState(topics[0]);
  const [textValue, setTextValue] = useState("");
  console.log(allCharts)
  return (
    <Box>
      <Header>
        <PageHeader title="Charts" subTitle={activeTopic} />
      </Header>
      <Content>
        <SideLeft>
          <TopicList {...{ topics, changeActiveTopic, activeTopic }} />
        </SideLeft>
        <SideRight>
          <DialogBox>
            <Dialog list={allCharts[activeTopic]} />
          </DialogBox>
          <MessageInputBox>
            <TextArea
              rows={1}
              value={textValue}
              onChange={e => setTextValue(e.target.value)}
            />
            <Button
              onClick={() => {
                sendMessageAction({
                  from: user,
                  msg: textValue,
                  topic: activeTopic
                });
                setTextValue("");
              }}
            >
              Send
            </Button>
          </MessageInputBox>
        </SideRight>
      </Content>
    </Box>
  );
}

export default Dashboard;
