import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <nav className="nav-wrapper">
      <ul>
        <li>
          <Link to="/">
            <img
              className="logo"
              src={require("../../assets/images/logo.png")}
              alt="logo"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
