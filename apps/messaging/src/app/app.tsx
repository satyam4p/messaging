import Home from "./features/Home";
import { Provider } from "react-redux";
import store from "./store";

export function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
