import { SET_USER, CLEAR_USER, UPDATE_USER } from "./UserTypes";
import Cookies from "js-cookie";

const cookie =
  Cookies.get("social_network_token_user") !== undefined
    ? JSON.parse(Cookies.get("social_network_token_user"))
    : { token: null, username: null, id: null };

const initial = {
  token: cookie.token,
  username: cookie.username,
  id: cookie.id,
};

initial.hasUser = initial.token ? true : false;

const UserReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        token: action.token,
        username: action.username,
        id: action.id,
        hasUser: true,
      };
    case CLEAR_USER:
      return {
        token: null,
        username: null,
        id: null,
        hasUser: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
};

export default UserReducer;
