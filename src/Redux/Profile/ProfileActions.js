import {
  MAKE_REQUEST_PROFILE,
  REQUEST_SUCCESS_PROFILE,
  REQUEST_FAIL_PROFILE,
} from "./ProfileTypes";
import Cookies from "js-cookie";

export const makeRequestProfile = () => { 
  console.log('will make profile request');
  return {
    type: MAKE_REQUEST_PROFILE
  }
}

export const requestSuccessProfile = (data) => {
  console.log('profile request success');
  return {
    type: REQUEST_SUCCESS_PROFILE,
    data,
  }
}

export const requestFailProfile = (error) => { 
  console.log('profile request fail');
  return {
    type: REQUEST_FAIL_PROFILE,
    error,
  }
}

export const fetchProfile = () => {
  console.log('in fetch profile')
  return (dispatch) => {
    console.log('in dispatch')
    dispatch(makeRequestProfile());
    fetch(
      `https://api-minireseausocial.mathis-dyk.fr/users/me`, {
        method: "GET",
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzIsImlhdCI6MTU5MDUyOTM5NSwiZXhwIjoxNTkzMTIxMzk1fQ.ZnFhEiJmsoadmC7MCNyJsvofhyOiQm74u337IuGSNa0",
          "Content-Type": "application/json"
        }
      } 
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          console.log('fetch home post fails');
          const error = response.message[0].messages[0]
          console.log(error)
          dispatch(requestFailProfile(error));
        } else {
          console.log('fetch home post success')
          dispatch(requestSuccessProfile(response));
        }
      });
  };
};

export const changeProfile = (data) => { 
  console.log('in change profile');
  return (dispatch) => { 
    //TODO: change id to dynamic
    fetch(`https://api-minireseausocial.mathis-dyk.fr/users/72`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzIsImlhdCI6MTU5MDUyOTM5NSwiZXhwIjoxNTkzMTIxMzk1fQ.ZnFhEiJmsoadmC7MCNyJsvofhyOiQm74u337IuGSNa0`
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "error") {
          console.log('update profile')
          dispatch(requestFailProfile(response.error));
        } else {
          console.log('fetch home post success')
          dispatch(requestSuccessProfile(response));
        }
      });
  }
}