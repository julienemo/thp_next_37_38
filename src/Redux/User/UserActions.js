import { SET_USER, CLEAR_USER } from "./UserTypes";

export const setUser = (token, id) => {
  console.log("action set user");
  return {
    type: SET_USER,
    token,
    id,
  };
};

export const clearUser = () => {
  console.log("action clear user");
  return {
    type: CLEAR_USER,
  };
};
