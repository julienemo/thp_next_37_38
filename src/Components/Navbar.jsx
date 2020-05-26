import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";
import Cookies from "js-cookie";


import { clearUser } from "../Redux/User";

const Navbar = (props) => { 
  const hasUser = useSelector((state) => state.hasUser)
  const dispatch = useDispatch();
  console.log("in navbar");

  //Cookies.set("social_network_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTAsImlhdCI6MTU5MDUwMDAxMCwiZXhwIjoxNTkzMDkyMDEwfQ.kNtYXkEqaie9twn-dW8uNo2INa-Kvtas9S3ezZLYwK4")

  const signOut = () => { 
    Cookies.remove("social_network_token");
    dispatch(clearUser())
    window.location.href = "/login";
  }

  return (<nav>
    <div className="nav-logo nav-link"><Link to="/"><p>Julie Network</p></Link></div>
    <ul className="nav-link-zone">
      <li className="nav-link"><Link to="/">Home</Link></li>
      {hasUser && <li className="nav-link"><Link to="/profile"><button>Profile</button></Link></li>}
      {!hasUser && <li className="nav-link"><Link to="/register"><button>Sign Up</button></Link></li>}
      {!hasUser && <li className="nav-link"><Link to="/login"><button>Sign In</button></Link></li>}
      {hasUser && <li className="nav-link"><button onClick={signOut}>Sign Out</button></li>}
    </ul>
  </nav>)
}

const mapStateToProps = (state) => {
  return {
    hasUser: state.hasUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearUser: () => dispatch(clearUser()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);