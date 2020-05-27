import { SET_USER, CLEAR_USER} from "./UserTypes";

export const setUser = (username, token) => { 
  return {
    type: SET_USER,
    username,
    token,
  }
}

export const clearUser = () => { 
  console.log('in clearUser')
  return {
    type: CLEAR_USER,
  }
}
