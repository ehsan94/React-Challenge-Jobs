import React from "react";

import { ReactComponent as Logo } from "../../assets/job-logo.svg";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Logo className="logo-container" />

    <div className="options">
      <Link className="option" to="/">
        View Jobs
      </Link>
      <Link className="option" to="/add">
        Add New
      </Link>
    </div>
  </div>
);

export default Header;
