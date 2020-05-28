import { SET_USER, CLEAR_USER } from "./UserTypes";

export const setUser = (token, id) => {
  return {
    type: SET_USER,
    token,
    id,
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};
