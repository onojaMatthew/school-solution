import {
  ADD_TASK_START,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILED,
  REMOVE_TASK_START,
  REMOVE_TASK_SUCCESS,
  REMOVE_TASK_FAILED,
  COMPLETE_TASK_START,
  COMPLETE_TASK_SUCCESS,
  COMPLETE_TASK_FAILED,
  FETCH_TASK_START,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILED,
} from "../actions/actions_task";

const initialState = {
  task: [],
  isAddTaskLoading: false,
  isAddTaskSuccess: false,
  isCompleteTaskLoading: false,
  isCompleteTaskSuccess: false,
  isRemoveTaskLoading: false,
  isRemoveTaskSuccess: false,
  isFetchLoading: false,
  isFetchSuccess: false,
  error: {},
}

const reducersTask = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TASK_START:
      return {
        ...state,
        isFetchLoading: true
      }
    case FETCH_TASK_SUCCESS:
      return {
        ...state,
        isFetchSuccess: true,
        task: action.data
      }
    case FETCH_TASK_FAILED:
      return {
        ...state,
        isFetchLoading: false,
        error: action.error
      }
    case ADD_TASK_START:
      return {
        ...state,
        isAddTaskLoading: true,
      }
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        isAddTaskLoading: false,
        isAddTaskSuccess: true,
        task: state.task.concat(action.data)
      }
    case ADD_TASK_FAILED:
      return {
        ...state,
        isAddTaskLoading: false,
        error: action.error
      }
    case REMOVE_TASK_START:
      return {
        ...state,
        isRemoveTaskLoading: true,
      }
    case REMOVE_TASK_SUCCESS:
      return {
        ...state,
        isRemoveTaskSuccess: true,
        task: action.data
      }
    case REMOVE_TASK_FAILED:
      return {
        ...state,
        isRemoveTaskLoading: false,
        error: action.error
      }
    case COMPLETE_TASK_START:
      return {
        ...state,
        isCompleteTaskLoading: true,
      }
    case COMPLETE_TASK_SUCCESS:
      return {
        ...state,
        isCompleteTaskSuccess: true,
        task: action.data
      }
    case COMPLETE_TASK_FAILED:
      return {
        ...state,
        isCompleteTaskLoading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default reducersTask;