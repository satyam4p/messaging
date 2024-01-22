import React, { useMemo } from "react";
import SocketContext from "./context";
import useWebSocket from "react-use-websocket";

interface Props {
  children: React.ReactNode;
}

const SocketProvider: React.FC<Props> = ({ children }) => {
  const URL: string = useMemo(() => {
    return "wss://socketsbay.com/wss/v2/1/demo/";
  }, []);

  const { getWebSocket, lastMessage, readyState, sendMessage } =
    useWebSocket(URL);

  return (
    <SocketContext.Provider
      value={{
        socket: {
          getWebsocket: getWebSocket,
          ReadyState: readyState,
          sendMessage: sendMessage,
          lastMessage: lastMessage
        }
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
