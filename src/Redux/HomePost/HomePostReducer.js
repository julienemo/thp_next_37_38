import { MAKE_REQUEST_HOME_POST, REQUEST_SUCCESS_HOME_POST, REQUEST_FAIL_HOME_POST, CHANGE_LIST } from "./HomePostTypes";

const initial = {
  loading: false,
  list: null,
  error: null
}

const HomePostReducer = (state = initial, action) => { 
  switch (action.type) { 
    case MAKE_REQUEST_HOME_POST:
      return {
        list: state.list,
        loading: true,
        error: null,
      }
    case REQUEST_SUCCESS_HOME_POST:
      return {
        list: action.list,
        loading: false,
        error: null,
      }
    case REQUEST_FAIL_HOME_POST:
      return {
        list: null,
        loading: false,
        error: action.error,
      }
    case CHANGE_LIST:
      return {
        list: state.list.push(action.newEl),
        loading: false,
        error: null,
      }
    default:
      return state;
  }
}

export default HomePostReducer;