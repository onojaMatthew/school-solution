export const CREATE_ACADEMIC_INFO_START = "CREATE_ACADEMIC_INFO_START";
export const CREATE_ACADEMIC_INFO_SUCCESS = "CREATE_ACADEMIC_INFO_SUCCESS";
export const CREATE_ACADEMIC_INFO_FAILED = "CREATE_ACADEMIC_INFO_FAILED";
export const UPDATE_ACADEMIC_INFO_START = "UPDATE_ACADEMIC_INFO_START";
export const UPDATE_ACADEMIC_INFO_SUCCESS = "UPDATE_ACADEMIC_INFO_SUCCESS";
export const UPDATE_ACADEMIC_INFO_FAILED = "UPDATE_ACADEMIC_INFO_FAILED";
export const FETCH_ACADEMIC_INFO_START = "FETCH_ACADEMIC_INFO_START";
export const FETCH_ACADEMIC_INFO_SUCCESS="FETCH_ACADEMIC_INFO_SUCCESS";
export const FETCH_ACADEMIC_INFO_FAILED ="FETCH_ACADEMIC_INFO_FAILED";

export const createAcademicInfoStart = () => {
  return {
    type: CREATE_ACADEMIC_INFO_START
  }
}

export const createAcademicInfoSuccess = (data) => {
  return {
    type: CREATE_ACADEMIC_INFO_SUCCESS,
    data
  }
}

export const createAcademicInfoFailed = (error) => {
  return {
    type: CREATE_ACADEMIC_INFO_FAILED,
    error
  }
}

export const createAcademicInfo = (userType, token, data) => {
  return dispatch => {
    dispatch(createAcademicInfoStart());
    fetch(`http://localhost:4000/api/v1/create/${userType}`, {
      method: "POST",
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json",
        "x-auth-token": token
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(resp => {
        dispatch(createAcademicInfoSuccess(resp));
      })
      .catch(err => {
        dispatch(createAcademicInfoFailed(err.message));
      });
  }
}

// Fetch academic information
export const fetchAcademicInfoStart = () => {
  return {
    type: FETCH_ACADEMIC_INFO_START
  }
}

export const fetchAcademicInfoSuccess = (data) => {
  return {
    type: FETCH_ACADEMIC_INFO_SUCCESS,
    data
  }
}

export const fetchAcademicInfoFailed = (error) => {
  return {
    type: FETCH_ACADEMIC_INFO_FAILED,
    error
  }
}

export const fetchAcademicInfo = () => {
  return dispatch => {
    dispatch(fetchAcademicInfoStart());
    fetch(`http://localhost:4000/api/v1/get/`, {
      method: "GET",
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json",
      }
    })
      .then(response => response.json())
      .then(resp => {
        dispatch(fetchAcademicInfoSuccess(resp));
      })
      .catch(err => {
        dispatch(fetchAcademicInfoFailed(err.message));
      });
  }
}

// Update academic information
export const updateAcademicInfoStart = () => {
  return {
    type: UPDATE_ACADEMIC_INFO_START
  }
}

export const updateAcademicInfoSuccess = (data) => {
  return {
    type: UPDATE_ACADEMIC_INFO_SUCCESS,
    data
  }
}

export const updateAcademicInfoFailed = (error) => {
  return {
    type: UPDATE_ACADEMIC_INFO_FAILED,
    error
  }
}

export const updateAcademicInfo = (userType, token, data) => {
  return dispatch => {
    dispatch(updateAcademicInfoStart());
    fetch(`http://localhost:4000/api/v1/update/${userType}`, {
      method: "PUT",
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json",
        "x-auth-token": token
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(resp => {
        dispatch(updateAcademicInfoSuccess(resp));
        dispatch(fetchAcademicInfo());
      })
      .catch(err => {
        dispatch(updateAcademicInfoFailed(err.message));
      });
  }
}