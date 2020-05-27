import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log('in private route')
  const hasUser = useSelector((state) => state.user.hasUser);

  return (
    <Route
      {...rest}
      render={(props) =>
        hasUser? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
}

export default PrivateRoute;