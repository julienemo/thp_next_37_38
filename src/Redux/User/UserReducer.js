import { SET_USER, CLEAR_USER } from "./UserTypes";
import Cookies from "js-cookie";

const cookie =
  Cookies.get("social_network_token_user") !== undefined
    ? JSON.parse(Cookies.get("social_network_token_user"))
    : { token: null, id: null };

const initial = {
  token: cookie.token,
  currentUser: cookie.id,
};

initial.hasUser = initial.token ? true : false;

const UserReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_USER:
      console.log("in set user reducer");
      console.log(action.id);
      return {
        token: action.token,
        currentUser: action.id,
        hasUser: true,
      };
    case CLEAR_USER:
      console.log("in clear user reducer");
      return {
        token: null,
        currentUser: null,
        hasUser: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
