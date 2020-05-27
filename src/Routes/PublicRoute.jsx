import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {
  console.log("in Public route");
  const hasUser = useSelector((state) => state.user.hasUser);

  return (
    <Route
      {...rest}
      render={(props) =>
        hasUser ? (
          <Redirect to={{ pathname: "/profile" }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
