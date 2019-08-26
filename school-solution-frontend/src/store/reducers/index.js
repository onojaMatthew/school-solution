import { combineReducers } from "redux";
import signup from "./reducers_signup";
import login from "./reducers_login";

const rootReducer = combineReducers({
  signup,
  login,
});

export default rootReducer;
