import {
  MAKE_REQUEST_PROFILE,
  REQUEST_SUCCESS_PROFILE,
  REQUEST_FAIL_PROFILE,
} from "./ProfileTypes";
import Cookies from "js-cookie";

const initial = {
  loading: false,
  error: null,
  profile: null,
}

const ProfileReducer = (state = initial, action) => { 
  switch (action.type) {
    case MAKE_REQUEST_PROFILE:
      console.log("reducer make request profile");
      return {
        loading: true,
        error: null,
        profile: state.profile,
      }
    case REQUEST_SUCCESS_PROFILE:
      console.log("reducer request success profile");
      return {
        loading: false,
        error: null,
        profile: action.data,
      }
    case REQUEST_FAIL_PROFILE:
      console.log("reducer request fail profile");
      return {
        loading: false,
        error: action.error,
        profile: state.profile,
      }
    default: return state;
  }
}

export default ProfileReducer;