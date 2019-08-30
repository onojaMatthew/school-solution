import {
  CREATE_TEACHER_START,
  CREATE_TEACHER_SUCCESS,
  CREATE_TEACHER_FAILED,
  UPDATE_TEACHER_START,
  UPDATE_TEACHER_SUCCESS,
  UPDATE_TEACHER_FAILED,
  FETCH_TEACHERS_START,
  FETCH_TEACHERS_SUCCESS,
  FETCH_TEACHERS_FAILED,
  FETCH_TEACHER_START,
  FETCH_TEACHER_SUCCESS,
  FETCH_TEACHER_FAILED,
  DELETE_TEACHER_START,
  DELETE_TEACHER_SUCCESS,
  DELETE_TEACHER_FAILED,
} from "../actions/actions_teachers";

const initialState = {
  teacher: {},
  teachers: [],
  isCreateTeacherLoading: false,
  isCreateTeacherSuccess: false,
  isGetTeacherLoading: false,
  isGetTeacherSuccess: false,
  isUpdateTeacherLoading: false,
  isUpdateTeacherSuccess: false,
  isDeleteTeacherLoading: false,
  isDeleteTeacherSuccess: false,
  isFetchTeacherLoading: false,
  isFetchTeacherSuccess: false,
  error: "",
}

const teacherReducer = (state=initialState, action) => {
  switch(action.type) {
    case CREATE_TEACHER_START:
      return {
        ...state,
        isCreateTeacherLoading: true
      }
    case CREATE_TEACHER_SUCCESS:
      return {
        ...state,
        isCreateTeacherLoading: false,
        isCreateTeacherSuccess: true,
        teachers: state.teachers.concat(action.data)
      }
    case CREATE_TEACHER_FAILED:
      return {
        ...state,
        isCreateTeacherLoading: false,
        error: action.error
      }
    case UPDATE_TEACHER_START:
      return {
        ...state,
        isUpdateTeacherLoading: true
      }
    case UPDATE_TEACHER_SUCCESS:
      return {
        ...state,
        isUpdateTeacherLoading: false,
        isUpdateTeacherSuccess: true,
        teachers: action.data
      }
    case UPDATE_TEACHER_FAILED:
      return {
        ...state,
        isUpdateTeacherLoading: false,
        error: action.error
      }
    case FETCH_TEACHERS_START:
      return {
        ...state,
        isFetchTeacherLoading: true
      }
    case FETCH_TEACHERS_SUCCESS:
      return {
        ...state,
        isFetchTeacherLoading: false,
        isFetchTeacherSuccess: true,
        teachers: action.data
      }
    case FETCH_TEACHERS_FAILED:
      return {
        ...state,
        isFetchTeacherLoading: false,
        error: action.error
      }
    case FETCH_TEACHER_START:
      return {
        ...state,
        isGetTeacherLoading: true
      }
    case FETCH_TEACHER_SUCCESS:
      return {
        ...state,
        isGetTeacherLoading: false,
        isGetTeacherSuccess: true,
        teacher: action.data
      }
    case FETCH_TEACHER_FAILED:
      return {
        ...state,
        isGetTeacherLoading: false,
        error: action.error
      }
    case DELETE_TEACHER_START:
      return {
        ...state,
        isDeleteTeacherLoading: true
      }
    case DELETE_TEACHER_SUCCESS:
      return {
        ...state,
        isDeleteTeacherLoading: false,
        isDeleteTeacherSuccess: true,
        teacher: action.data
      }
    case DELETE_TEACHER_FAILED:
      return {
        ...state,
        isDeleteTeacherLoading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default teacherReducer;