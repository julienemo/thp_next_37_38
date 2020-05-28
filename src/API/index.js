export const LetUserIn = (typeOfAction, values) => {
  let url;
  switch (typeOfAction) {
    case "REGISTER":
      url = "https://api-minireseausocial.mathis-dyk.fr/auth/local/register";
      break;
    case "CONNECT":
      url = "https://api-minireseausocial.mathis-dyk.fr/auth/local";
      break;
    default:
      url = "https://api-minireseausocial.mathis-dyk.fr/auth/local";
  }
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  }).then((response) => response.json());
};

export const GetPostList = (id = null) => {
  const baseURL =
    "https://api-minireseausocial.mathis-dyk.fr/posts?_limit=20&_sort=created_at:desc";
  const userPart = id ? `&user.id=${id}` : "";
  const finalURL = baseURL + userPart;
  return fetch(finalURL).then((response) => response.json());
};

export const GetProfile = (id, token) => {
  const URL = "https://api-minireseausocial.mathis-dyk.fr/users";
  return fetch(`${URL}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());
};

export const ModifyProfile = (id, token, values) => {
  const baseURL = "https://api-minireseausocial.mathis-dyk.fr/users";
  return fetch(`${baseURL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  }).then((response) => response.json());
};

export const CreatePost = (id, token, values) => {
  const baseURL = "https://api-minireseausocial.mathis-dyk.fr/posts";
  return fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ...values, user: id }),
  }).then((response) => response.json());
};

export const DeletePost = (postId, token) => {
  const baseURL = `https://api-minireseausocial.mathis-dyk.fr/posts`;
  return fetch(`${baseURL}/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());
};
