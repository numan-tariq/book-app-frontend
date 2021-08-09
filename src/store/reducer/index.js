import { combineReducers } from "redux";
import testReducer from "./user-reducer";

export default combineReducers({
  appData: testReducer,
});
