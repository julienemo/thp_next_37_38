import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { ClearUser } from "../Tools";
import { GoToSignIn } from "../Routes/Redirect";
import { clearUser } from "../Redux";

const Navbar = () => {
  const hasUser = useSelector((state) => state.user.hasUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = () => {
    ClearUser();
    dispatch(clearUser());
    GoToSignIn(history);
  };

  return (
    <nav>
      <div className="nav-logo nav-link">
        <Link to="/">
          <p>Julie Social Network</p>
        </Link>
      </div>
      <ul className="nav-link-zone">
        <li className="nav-link">
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        {hasUser && (
          <li className="nav-link">
            <Link to="/profile">
              <button>Profile</button>
            </Link>
          </li>
        )}
        {!hasUser && (
          <li className="nav-link">
            <Link to="/register">
              <button>Sign Up</button>
            </Link>
          </li>
        )}
        {!hasUser && (
          <li className="nav-link">
            <Link to="/login">
              <button>Sign In</button>
            </Link>
          </li>
        )}
        {hasUser && (
          <li className="nav-link">
            <button onClick={signOut}>Sign Out</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
