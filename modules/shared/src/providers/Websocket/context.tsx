import React, { createContext } from "react";
import { SendMessage, WebSocketLike } from "react-use-websocket/dist/lib/types";
import { ReadyState } from "react-use-websocket";

interface ISocket {
  socket: {
    sendMessage: SendMessage;
    ReadyState: ReadyState;
    getWebsocket: () => WebSocketLike | null;
    lastMessage: any;
  } | null;
}

const SocketContext = createContext<ISocket>({ socket: null });

export default SocketContext;
