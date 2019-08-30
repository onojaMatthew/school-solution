import { combineReducers } from "redux";
import signup from "./reducers_signup";
import login from "./reducers_login";
import teachers from "./reducers_teacher";

const rootReducer = combineReducers({
  signup,
  login,
  teachers
});

export default rootReducer;
