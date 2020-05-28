import Cookies from "js-cookie";

export const StoreUser = (response, history) => {
  Cookies.set(
    "social_network_token_user",
    JSON.stringify({
      id: response.user.id,
      username: response.user.username,
      token: response.jwt,
    })
  );
};

export const ClearUser = () => {
  Cookies.remove("social_network_token_user");
};

export const ChangeUser = (username) => {
  const original = JSON.parse(Cookies.get("social_network_token_user"));
  const newCookie = { ...original, username };
  Cookies.set("social_network_token_user", JSON.stringify(newCookie));
};
