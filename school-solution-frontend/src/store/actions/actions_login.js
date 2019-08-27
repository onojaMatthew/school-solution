import Auth from "../../helper/Auth";
import axios from "axios";
export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const USER_LOGOUT_START = "USER_LOGOUT_START";
export const USER_LOGUT_SUCCESS = "USER_LOGOUT_SUCCESS";
export const USER_LOGOUT_FAILED = "USER_LOGOUT_FAILED";

// Login action

export const userLoginStart = () => {
  return {
    type: USER_LOGIN_START
  }
}

export const userLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    data
  }
}

export const userLoginFailed = (error) => {
  return {
    type: USER_LOGIN_FAILED,
    error
  }
}

export const userLogin = (data, userType) => {
  return dispatch => {
    dispatch(userLoginStart());
    fetch(`http://localhost:4000/api/v1/signin/${userType}`, {
      method: "POST",
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(resp => {
        dispatch(userLoginSuccess(resp));
        Auth.authenticateUser(resp);
      })
      .catch(err => {
        dispatch(userLoginFailed(err.message));
      });
  }
}

// Logout actions
export const userLogoutStart = () => {
  return {
    type: USER_LOGOUT_START
  }
}

export const userLogoutSuccess = (data) => {
  return {
    type: USER_LOGUT_SUCCESS,
    data
  }
}

export const userLogoutFailed = (error) => {
  return {
    type: USER_LOGOUT_FAILED,
    error
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(userLogoutStart());
    axios.get(`http:localhost:4000/api/v1/signout`)
      .then(resp => {
        dispatch(userLogoutSuccess(resp.data));
      })
      .catch(err => {
        dispatch(userLogoutFailed(err.message));
      });
  }
}
