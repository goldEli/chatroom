import React from "react";
import styled from "styled-components";
import { PageHeader, Input, Button } from "antd";

import TopicList from "../TopicList/TopicList"
import Dialog from "../Dialog/Dialog"

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
const Footer = styled.div`
  height: 69px;
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
  flex:1
`

const MessageInputBox = styled.div`
  height: 60px;
`

function Dashboard() {
  return (
    <Box>
      <Header>
        <PageHeader title="Charts" subTitle="Topic" />
      </Header>
      <Content>
        <SideLeft>
          <TopicList />
        </SideLeft>
        <SideRight>
          <DialogBox>
            <Dialog/>
          </DialogBox>
          <MessageInputBox>
            <TextArea rows={1} />
            <Button>Send</Button>
          </MessageInputBox>
        </SideRight>
      </Content>
    </Box>
  );
}

export default Dashboard;
