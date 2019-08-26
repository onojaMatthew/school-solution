import axios from "axios";
export const USER_SIGNUP_START = "USER_SIGNUP_START";
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS";
export const USER_SIGNUP_FAILED = "USER_SIGNUP_FAILED";

export const userSignupStart = () => {
  return {
    type: USER_SIGNUP_START
  }
}

export const userSignupSuccess = (data) => {
  return {
    type: USER_SIGNUP_SUCCESS,
    data
  }
}

export const userSignupFailed = (error) => {
  return {
    type: USER_SIGNUP_FAILED,
    error
  }
}

export const userSignup = (data, userType) => {
  console.log(data, userType);
  return dispatch => {
    dispatch(userSignupStart());
    axios.post(`http://localhost:4000/api/v1/signup/${userType}`, { data })
      .then(resp => {
        console.log("we are here")
        dispatch(userSignupSuccess(resp.data))
      })
      .catch(err => {
        dispatch(userSignupFailed(err.message));
      });
  }
}

