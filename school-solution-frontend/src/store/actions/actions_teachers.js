export const CREATE_TEACHER_START = "CREATE_TEACHER_START";
export const CREATE_TEACHER_SUCCESS = "CREATE_TEACHER_SUCCESS";
export const CREATE_TEACHER_FAILED = "CREATE_TEACHER_FAILED";
export const UPDATE_TEACHER_START = "UPDATE_TEACHER_START";
export const UPDATE_TEACHER_SUCCESS = "UPDATE_TEACHER_SUCCESS";
export const UPDATE_TEACHER_FAILED = "UPDATE_TEACHER_FAILED";
export const FETCH_TEACHERS_START = "FETCH_TEACHERS_START";
export const FETCH_TEACHERS_SUCCESS = "FETCH_TEACHERS_SUCCESS";
export const FETCH_TEACHERS_FAILED = "FETCH_TEACHERS_FAILED";
export const FETCH_TEACHER_START = "FETCH_TEACHER_START";
export const FETCH_TEACHER_SUCCESS = "FETCH_TEACHER_SUCCESS";
export const FETCH_TEACHER_FAILED = "FETCH_TEACHER_FAILED";
export const DELETE_TEACHER_START = "DELETE_TEACHER_START";
export const DELETE_TEACHER_SUCCESS = "DELETE_TEACHER_SUCCESS";
export const DELETE_TEACHER_FAILED = "DELETE_TEACHER_FAILED";
     
export const createTeacherStart = () => {
  return {
    type: CREATE_TEACHER_START
  }
}

export const createTeacherSuccess = (data) => {
  return {
    type: CREATE_TEACHER_SUCCESS,
    data
  }
}

export const createTeacherFailed = (error) => {
  return {
    type: CREATE_TEACHER_FAILED,
    error
  }
}

export const createTeacher = (data, token, userType) => {
  return dispatch => {
    dispatch(createTeacherStart());
    fetch(`http://localhost:4000/api/v1`, {
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
        dispatch(createTeacherSuccess(resp));
      })
      .catch(err => {
        dispatch(createTeacherFailed(err.message));
      });
  }
}

// Fetches all teachers
export const fetchTeachersStart = () => {
  return {
    type: FETCH_TEACHERS_START
  }
}

export const fetchTeachersSuccess = (data) => {
  return {
    type: FETCH_TEACHERS_SUCCESS,
    data
  }
}

export const fetchTeachersFailed = (error) => {
  return {
    type: FETCH_TEACHERS_FAILED,
    error
  }
}

export const fetchTeachers = (data, token, userType) => {
  return dispatch => {
    dispatch(fetchTeachersStart());
    fetch(`http://localhost:4000/api/v1`, {
      method: "GET",
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json",
        "x-auth-token": token
      }
    })
      .then(response => response.json())
      .then(resp => {
        dispatch(fetchTeachersSuccess(resp));
      })
      .catch(err => {
        dispatch(fetchTeachersFailed(err.message));
      });
  }
}

// Fetches a single teacher

export const fetchTeacherStart = () => {
  return {
    type: FETCH_TEACHER_START
  }
}

export const fetchTeacherSuccess = (data) => {
  return {
    type: FETCH_TEACHER_SUCCESS,
    data
  }
}

export const fetchTeacherFailed = (error) => {
  return {
    type: FETCH_TEACHER_FAILED,
    error
  }
}

export const fetchTeacher = (teacherId, token, userType) => {
  return dispatch => {
    dispatch(fetchTeacherStart());
    fetch(`http://localhost:4000/api/v1`, {
      method: "GET",
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json",
        "x-auth-token": token
      }
    })
      .then(response => response.json())
      .then(resp => {
        dispatch(fetchTeacherSuccess(resp));
      })
      .catch(err => {
        dispatch(fetchTeacherFailed(err.message));
      });
  }
}

// Updates teacher information
export const updateTeacherStart = () => {
  return {
    type: UPDATE_TEACHER_START
  }
}

export const updateTeacherSuccess = (data) => {
  return {
    type: UPDATE_TEACHER_SUCCESS,
    data
  }
}

export const updateTeacherFailed = (error) => {
  return {
    type: UPDATE_TEACHER_FAILED,
    error
  }
}

export const updateTeacher = (data, teacherId, token, userType) => {
  return dispatch => {
    dispatch(updateTeacherStart());
    fetch(`http://localhost:4000/api/v1`, {
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
        dispatch(updateTeacherSuccess(resp));
      })
      .catch(err => {
        dispatch(updateTeacherFailed(err.message));
      });
  }
}

// Deletes teacher with the provided teacher id

export const deleteTeacherStart = () => {
  return {
    type: DELETE_TEACHER_START
  }
}

export const deleteTeacherSuccess = (data) => {
  return {
    type: DELETE_TEACHER_SUCCESS,
    data
  }
}

export const deleteTeacherFailed = (error) => {
  return {
    type: DELETE_TEACHER_FAILED,
    error
  }
}

export const deleteTeacher = (teacherId, token, userType) => {
  return dispatch => {
    dispatch(deleteTeacherStart());
    fetch(`http://localhost:4000/api/v1`, {
      method: "DELETE",
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json",
        "x-auth-token": token
      },
    })
      .then(response => response.json())
      .then(resp => {
        dispatch(deleteTeacherSuccess(resp));
      })
      .catch(err => {
        dispatch(deleteTeacherFailed(err.message));
      });
  }
}