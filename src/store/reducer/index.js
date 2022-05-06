import { combineReducers } from "redux";
import { penderReducer } from "redux-pender";
import memberReducer from "./member";

export default combineReducers({
  pender: penderReducer,
  member: memberReducer,
});
