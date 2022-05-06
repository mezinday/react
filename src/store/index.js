import { applyMiddleware, createStore } from "redux";
import penderMiddleware from "redux-pender";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(penderMiddleware()))
);
export default store;
