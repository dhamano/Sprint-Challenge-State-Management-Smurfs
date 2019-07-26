import {
  GET_SMURF_LIST_START, GET_SMURF_LIST_SUCCESS, GET_SMURF_LIST_FAIL,
  ADDING_SMURF_START, ADDING_SMURF_SUCCESS, ADDING_SMURF_FAIL,
  EDITING_SMURF_START, EDITING_SMURF_SUCCESS, EDITING_SMURF_FAIL
} from '../actions';

const initialState = {
  error: null,
  isFetching: false,
  isAdding: false,
  isEditing: false,
  smurfList: null
}

export default ( state = initialState, action ) => {
  switch(action.type) {
    case GET_SMURF_LIST_START:
      return {
        ...state,
        error: null,
        isFetching: true
      }
    case GET_SMURF_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        smurfList: action.payload
      }
    case GET_SMURF_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
        smurfList: null
      }
    case ADDING_SMURF_START:
      return {
        ...state,
        error: null,
        isAdding: true,
      }
    case ADDING_SMURF_SUCCESS:
      return {
        ...state,
        error: null,
        isAdding: false,
        smurfList: action.payload
      }
    case ADDING_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        isAdding: false
      }
      case EDITING_SMURF_START:
        return {
          ...state,
          error: null,
          isEditing: true,
        }
      case EDITING_SMURF_SUCCESS:
        return {
          ...state,
          error: null,
          isEditing: false,
          smurfList: action.payload
        }
      case EDITING_SMURF_FAIL:
        return {
          ...state,
          error: action.payload,
          isEditing: false
        }
    default:
      return state;
  }
} 