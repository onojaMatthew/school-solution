import Auth from "../../helper/Auth";
// import hist from "../../helper/history";
export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";

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
        // this.props.history.push("/");
      })
      .catch(err => {
        dispatch(userLoginFailed(err.message));
      });
  }
}