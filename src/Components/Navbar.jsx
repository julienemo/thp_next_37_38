import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch,} from "react-redux";
import Cookies from "js-cookie";


import { clearUser } from "../Redux";

const Navbar = () => { 
  const hasUser = useSelector((state) => state.user.hasUser)
  const dispatch = useDispatch();

  const signOut = () => { 
    Cookies.remove("social_network_token");
    Cookies.remove("current_user_id");

    dispatch(clearUser())
    window.location.href = "/login";
  }

  return (<nav>
    <div className="nav-logo nav-link"><Link to="/"><p>Julie Network</p></Link></div>
    <ul className="nav-link-zone">
      <li className="nav-link"><Link to="/"><button>Home</button></Link></li>
      {hasUser && <li className="nav-link"><Link to="/profile"><button>Profile</button></Link></li>}
      {!hasUser && <li className="nav-link"><Link to="/register"><button>Sign Up</button></Link></li>}
      {!hasUser && <li className="nav-link"><Link to="/login"><button>Sign In</button></Link></li>}
      {hasUser && <li className="nav-link"><button onClick={signOut}>Sign Out</button></li>}
    </ul>
  </nav>)
}

export default Navbar;