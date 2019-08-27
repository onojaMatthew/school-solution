import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT_START,
  USER_LOGUT_SUCCESS,
  USER_LOGOUT_FAILED,
} from "../actions/actions_login";

const initialState = {
  user: {},
  error: "",
  isLoginLoading: false,
  isLoginSuccess: false,
  isLogoutLoading: false,
  isLogoutSuccess: false,
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
    case USER_LOGOUT_START:
      return {
        ...state,
        isLogoutLoading: true
      }
    case USER_LOGUT_SUCCESS:
      return {
        ...state,
        isLogoutLoading: false,
        isLogoutSuccess: true
      }
    case USER_LOGOUT_FAILED:
      return {
        ...state,
        isLogoutLoading: false,
        error: action.error
      }
    default: 
      return state
  }
}

export default loginReducers;
