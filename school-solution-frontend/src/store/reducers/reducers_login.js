import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
} from "../actions/actions_login";

const initialState = {
  user: {},
  error: "",
  isLoginLoading: false,
  isLoginSuccess: false
}

const loginReducers = (state = initialState, action) => {
  switch(action.type) {
    case USER_LOGIN_START:
      return {
        ...state,
        isLoginLoading: true
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginLoading: false,
        isLoginSuccess: true,
        user: action.data
      }
    case USER_LOGIN_FAILED:
      return {
        ...state,
        isLoginLoading: false,
        error: action.error
      }
    default: 
      return state
  }
}

export default loginReducers;
