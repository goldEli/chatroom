import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "antd";
import styled from "styled-components";

const MsgItem = styled.div`
  padding: 5px;
`;


function Dialog(props) {
  const { list } = props;
  return (
    <React.Fragment>
      {list.map((item, i) => (
        <MsgItem key={i}>
          <Avatar
            shape="square"
            size="large"
            style={{ backgroundColor: 'Olive', margin: "0 5px" }}
          >
            {item.from}
          </Avatar>
          <span>{item.msg}</span>
        </MsgItem>
      ))}
    </React.Fragment>
  );
}

Dialog.propTypes = {};

export default Dialog;
