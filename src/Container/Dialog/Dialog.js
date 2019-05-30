import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "antd";
import styled from "styled-components";

const MsgItem = styled.div`
  padding: 5px;
`;

function Dialog(props) {
  return (
    <React.Fragment>
      {[
        { from: "user", message: "123" },
        { from: "susie", message: "123" }
      ].map((info, i) => (
        <MsgItem key={i}>
          <Avatar style={{ backgroundColor: "#87d068" }}>{info.from}</Avatar>
          <span>{info.message}</span>
        </MsgItem>
      ))}
    </React.Fragment>
  );
}

Dialog.propTypes = {};

export default Dialog;
