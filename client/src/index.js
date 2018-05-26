import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import reduxthunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxthunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
