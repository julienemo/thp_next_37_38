import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Connection from "./Pages/Connection";
import Profile from "./Pages/Profile";
import Error from "./Pages/Error";

import Store from "./Redux/Store";

import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";

const App = () => {
  console.log("in app");

  return (
    <>
      <Provider store={Store}>
        <Router>
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/user/:userSlug" component={Profile} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PublicRoute exact path="/register" component={Register} />
            <PublicRoute exact path="/login" component={Connection} />
            <Router exact path="/">
              <Home />
            </Router>
            <Router path="*">
              <Error />
            </Router>
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;
