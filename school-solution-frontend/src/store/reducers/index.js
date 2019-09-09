import { combineReducers } from "redux";
import signup from "./reducers_signup";
import login from "./reducers_login";
import teachers from "./reducers_teacher";
import academic from "./reducers_academic_info";
import task from "./reducers_task";

const rootReducer = combineReducers({
  signup,
  login,
  teachers,
  academic,
  task
});

export default rootReducer;
