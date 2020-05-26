import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => { 
  console.log('in navbar')
  return (<nav>
    <div className="nav-logo"><Link to="/"><p>Julie Network</p></Link></div>
    <ul className="nav-link-zone">
      <li className="nav-link"><Link to="/">Home</Link></li>
      <li className="nav-link"><Link to="/profile">Profile</Link></li>
      <li className="nav-link"><Link to="/register">Sign Up</Link></li>
      <li className="nav-link"><Link to="/login">Sign In</Link></li>
      <li className="nav-link"><Link to="/logout">Sign Out</Link></li>
    </ul>
  </nav>)
}

export default Navbar;