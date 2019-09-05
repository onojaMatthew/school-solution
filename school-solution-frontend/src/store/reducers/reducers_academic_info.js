import {
  CREATE_ACADEMIC_INFO_START,
  CREATE_ACADEMIC_INFO_SUCCESS,
  CREATE_ACADEMIC_INFO_FAILED,
  UPDATE_ACADEMIC_INFO_START,
  UPDATE_ACADEMIC_INFO_SUCCESS,
  UPDATE_ACADEMIC_INFO_FAILED,
  FETCH_ACADEMIC_INFO_START,
  FETCH_ACADEMIC_INFO_SUCCESS,
  FETCH_ACADEMIC_INFO_FAILED,
} from "../actions/actions_academic_info";

const initialState = {
  academic: [],
  isFetchLoading: false,
  isfetchSuccess: false,
  isUpdateLoading: false,
  isUpdateSuccess: false,
  isCreateLoading: false,
  isCreateSuccess: false,
  error: "",
}

const academicReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_ACADEMIC_INFO_START:
      return {
        ...state,
        isCreateLoading: true
      }
    case CREATE_ACADEMIC_INFO_SUCCESS:
      return {
        ...state,
        isCreateLoading: false,
        isCreateSuccess: true,
        academic: action.data
      }
    case CREATE_ACADEMIC_INFO_FAILED:
      return {
        ...state,
        isCreateLoading: false,
        error: action.error
      }
    case UPDATE_ACADEMIC_INFO_START:
      return {
        ...state,
        isUpdateLoading: true
      }
    case UPDATE_ACADEMIC_INFO_SUCCESS:
      return {
        ...state,
        isUpdateLoading: false,
        isUpdateSuccess: true,
        academic: action.data
      }
    case UPDATE_ACADEMIC_INFO_FAILED:
      return {
        ...state,
        isUpdateLoading: false,
        error: action.error
      }
    case FETCH_ACADEMIC_INFO_START:
      return {
        ...state,
        isFetchLoading: true
      }
    case FETCH_ACADEMIC_INFO_SUCCESS:
      return {
        ...state,
        isFetchLoading: false,
        isfetchSuccess: true,
        academic: action.data
      }
    case FETCH_ACADEMIC_INFO_FAILED:
      return {
        ...state,
        isFetchLoading: false,
        error: action.error
      }
    default: 
      return state;
  }
}

export default academicReducer;