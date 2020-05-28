import Cookies from "js-cookie";

export const StoreUser = (response, history) => {
  console.log("will set cookie");
  Cookies.set(
    "social_network_token_user",
    JSON.stringify({
      id: response.user.id,
      token: response.jwt,
    })
  );
  console.log(JSON.parse(Cookies.get("social_network_token_user")));
};

export const ClearUser = () => {
  console.log("will clear cookie");
  Cookies.remove("social_network_token_user");
  console.log(Cookies.get("social_network_token_user"));
};
