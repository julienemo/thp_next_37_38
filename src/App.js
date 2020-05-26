import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Connection from "./Pages/Connection";
import Profile from "./Pages/Profile";

import UserStore from "./Redux/User/Store"

const App = () => {
  console.log("in app");
  return (
    <>
      <Provider store={UserStore}>
        <Router>
          <Navbar />
          <Switch>
            <Router exact path="/">
              <Home />
            </Router>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Connection />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Router>
        <p>This is the normal content</p>
      </Provider>
    </>
  );
};

export default App;
