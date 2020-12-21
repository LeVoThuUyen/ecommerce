import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import { Link } from "react-router-dom";
import { auth } from "./../../firebase/utils";
import logo from "./../../assets/logo1.jpg";

const mapState = ({user}) => ({
  currentUser : user.currentUser
});

const Header = (props) => {
  const { currentUser } = useSelector(mapState);
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="shop logo" />
          </Link>
        </div>
        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <Link to="/dashboard">
                  My Account
                </Link>
              </li>
              <li>
                <Link>
                <span onClick={() => auth.signOut()}>LogOut</span>
                </Link>
                
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};


export default Header;
