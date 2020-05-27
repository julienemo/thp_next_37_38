import Cookies from "js-cookie";

export const StoreUser = (response, history) => {
  Cookies.set(
    "social_network_token_user",
    JSON.stringify({
      id: response.user.id,
      token: response.jwt,
    })
  );
};

export const ClearUser = () => {
  Cookies.remove("social_network_token_user");
};
