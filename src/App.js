import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Connection from "./Pages/Connection";
import Profile from "./Pages/Profile";
import Error from "./Pages/Error";

import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/user/:userSlug" component={Profile} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PublicRoute exact path="/register" component={Register} />
        <PublicRoute exact path="/login" component={Connection} />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
};

export default App;
