import React, { createContext, useReducer } from "react";
import io from "socket.io-client";
export const ctx = createContext();

/**

  initState = {
    topic1: [
      {form: "", msg: "hi"}
    ]
  }

 */

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
const initialState = {
  topic1: [
    { from: "use1", msg: "hi" },
    { from: "use2", msg: "hello" },
    { from: "use3", msg: "I’d like you to…" }
  ],
  topic2: [
    { from: "use5", msg: "Are you sure…?" },
    { from: "use2", msg: "I cannot wait to…" },
    { from: "use3", msg: "I dare say…" }
  ]
};
const reducer = (state, action) => {
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return {
        ...state,
        [topic]: [...state[topic], { from, msg }]
      };
    default:
      return state;
  }
};

let socket;
const user = "user" + Math.random().toFixed(2) * 100

function sendMessageAction(value) {
  socket.emit("chat message", value);
}

const Store = props => {
  const [allCharts, dispatch] = useReducer(reducer, initialState);

  if (!socket) {
    socket = io(":3001");
    socket.on("chat message", function(msg) {
      dispatch({ type: RECEIVE_MESSAGE, payload: msg });
    });
  }

  return (
    <ctx.Provider value={{ allCharts, sendMessageAction, user }}>
      {props.children}
    </ctx.Provider>
  );
};
export default Store;
