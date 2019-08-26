import {
  USER_SIGNUP_START,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
} from "../actions/actions_signup";

const initialState = {
  user: {},
  error: "",
  isSignupLoading: false,
  isSignupSuccess: false
}

const userReducers = (state = initialState, action) => {
  switch(action.type) {
    case USER_SIGNUP_START:
      return {
        ...state,
        isSignupLoading: true
      }
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        isSignupLoading: false,
        isSignupSuccess: true,
        user: action.data
      }
    case USER_SIGNUP_FAILED:
      return {
        ...state,
        isSignupLoading: false,
        error: action.error
      }
    default: 
      return state
  }
}

export default userReducers;
