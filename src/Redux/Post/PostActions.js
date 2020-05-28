import { SET_LIST, ADD_POST, DELETE_POST, LOAD_ERROR } from "./PostTypes";

export const setList = (list) => {
  return {
    type: SET_LIST,
    list,
  };
};

export const addPost = (newPost) => {
  return {
    type: ADD_POST,
    newPost,
  };
};

export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id,
  };
};

export const loadError = (error) => {
  return {
    type: LOAD_ERROR,
    error,
  };
};
