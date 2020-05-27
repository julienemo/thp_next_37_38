import { SET_USER, CLEAR_USER } from "./UserTypes";
import Cookies from "js-cookie";

const initial = {
  token: Cookies.get("social_network_token"),
  currentUser: Cookies.get("current_user_id"),
};

initial.hasUser = initial.token?true:false

const UserReducer = (state = initial, action) => { 
  switch (action.type) { 
    case SET_USER:
      return {
        token: action.token,
        hasUser: true,
      }
    case CLEAR_USER:
      return {
        token: null,
        hasUser: false
      }
    default:
      return initial
  }
}

export default UserReducer;