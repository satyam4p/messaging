import Home from "./features/Home";
import { Provider } from "react-redux";
import store from "./store";
import SocketProvider from "modules/shared/src/providers/Websocket/provider";

export function App() {
  return (
    <Provider store={store}>
      <SocketProvider>
        <Home />
      </SocketProvider>
    </Provider>
  );
}

export default App;
