import { SET_LIST, ADD_POST, DELETE_POST, LOAD_ERROR } from "./PostTypes";

const initial = {
  list: [],
  error: null,
};

const PostReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_LIST:
      return {
        list: action.list,
        error: null,
      };
    case ADD_POST:
      let newState = {
        error: null,
        list: [...state.list],
      };
      newState.list.unshift(action.newPost);
      return newState;
    case DELETE_POST:
      return {
        list: state.list.filter((el) => el.id !== action.id),
        error: null,
      };
    case LOAD_ERROR:
      return {
        list: state.list,
        error: action.error,
      };
    default:
      return state;
  }
};

export default PostReducer;
