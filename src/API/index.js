import axios from "axios";

const API = axios.create({
  baseURL: "https://api-minireseausocial.mathis-dyk.fr",
});

/* 
API.interceptors.request.use(({ headers, ...config }) => ({
  ...config,
  headers: {
    ...headers,
    "Content-Type": "application/json",
    //Authorization: `Bearer ${headers.Authorization}`,
  },
}));
 */

export default class APIManager {
  static async registerUser(email, username, password) {
    const res = await API.post("/auth/local/register", { username, email, password })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => { console.log(error)});
    return res.data;
  }
}