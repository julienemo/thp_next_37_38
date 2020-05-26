import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"


const App = () => {
  console.log('in app')
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Router exact path="/">
            <Home/>
          </Router>
        </Switch>
      </Router>
      <p>This is the normal content</p>
    </>
  );
}

export default App;
