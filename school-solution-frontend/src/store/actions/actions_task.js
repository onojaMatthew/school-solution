import axios from "axios";
export const ADD_TASK_START = "ADD_TASK_START";
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const ADD_TASK_FAILED = "ADD_TASK_FAILED";
export const REMOVE_TASK_START = "REMOVE_TASK_START";
export const REMOVE_TASK_SUCCESS = "REMOVE_TASK_SUCCESS";
export const REMOVE_TASK_FAILED = "REMOVE_TASK_FAILED";
export const COMPLETE_TASK_START = "COMPLETE_TASK_START";
export const COMPLETE_TASK_SUCCESS = "COMPLETE_TASK_SUCCESS";
export const COMPLETE_TASK_FAILED = "COMPLETE_TASK_FAILED";
export const FETCH_TASK_START = "FETCH_TASK_START";
export const FETCH_TASK_SUCCESS = "FETCH_TASK_SUCCESS";
export const FETCH_TASK_FAILED = "FETCH_TASK_FAILED";

// Creates new task
export const addTaskStart = () => {
  return {
    type: ADD_TASK_START
  }
}

export const addTaskSuccess = (data) => {
  return {
    type: ADD_TASK_SUCCESS,
    data
  }
}

export const addTaskFailed = (error) => {
  return {
    type: ADD_TASK_FAILED,
    error
  }
}

export const addTask = (data, userType, token) => {
  console.log(data, userType, token)
  return dispatch => {
    dispatch(addTaskStart());
    axios.post(`http://localhost:4000/api/v1/task/${userType}`, { data })
      .then(json => {
        dispatch(addTaskSuccess(json.data));
      })
      .catch(err => {
        dispatch(addTaskFailed(err.message));
      });
  }
}

// Complete task
export const completeTaskStart = () => {
  return {
    type: COMPLETE_TASK_START
  }
}

export const completeTaskSuccess = (data) => {
  return {
    type: COMPLETE_TASK_SUCCESS,
    data
  }
}

export const completeTaskFailed = (error) => {
  return {
    type: COMPLETE_TASK_FAILED,
    error
  }
}

export const completeTask = (taskId, userType, token, userId) => {
  console.log(taskId, " from action")
  return dispatch => {
    dispatch(completeTaskStart());
    axios.put(`http://localhost:4000/api/v1/task/${userType}/complete/${taskId}`)
      .then(resp => {
        dispatch(completeTaskSuccess(resp.data));
      })
      .then(() => {
        dispatch(fetchTask(userId));
      })
      .catch(err => {
        dispatch(completeTaskFailed(err.message));
      });
  }
}

// Remove task
export const removeTaskStart = () => {
  return {
    type: REMOVE_TASK_START
  }
}

export const removeTaskSuccess = (data) => {
  return {
    type: REMOVE_TASK_SUCCESS,
    data
  }
}

export const removeTaskFailed = (error) => {
  return {
    type: REMOVE_TASK_FAILED,
    error
  }
}

export const removeTask = (taskId, userType, token, userId) => {
  return dispatch => {
    dispatch(removeTaskStart());
    axios.delete(`http://localhost:4000/api/v1/task/${userType}/${taskId}`)
      .then(resp => {
        dispatch(removeTaskSuccess(resp.data));
        dispatch(fetchTask(userId));
      })
      .catch(err => {
        dispatch(removeTaskFailed(err.message));
      });
  }
}


// Fetch all task
export const fetchTaskStart = () => {
  return {
    type: FETCH_TASK_START
  }
}

export const fetchTaskSuccess = (data) => {
  return {
    type: FETCH_TASK_SUCCESS,
    data
  }
}

export const fetchTaskFailed = (error) => {
  return {
    type: FETCH_TASK_FAILED,
    error
  }
}

export const fetchTask = (userId) => {
  return dispatch => {
    dispatch(fetchTaskStart());
    fetch(`http://localhost:4000/api/v1/task/${userId}`, {
      method: "GET",
      headers: {
        ACCEPT: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch(fetchTaskSuccess(json));
      })
      .catch(err => {
        dispatch(fetchTaskFailed(err.message));
      });
  }
}