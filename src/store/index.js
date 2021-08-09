import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const middleware = [thunk, logger];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export { store };
