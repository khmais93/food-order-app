import ReactDOM from "react-dom";

import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import middleware from "./middleware";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
