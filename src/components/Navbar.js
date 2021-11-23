import React from "react";
import "../App.scss";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <li>
        <Link to="/overview" className="header-name">
          Overview
        </Link>
      </li>

      <li>
        <Link to="/repositories" className="header-name">
          Repositories
        </Link>
      </li>

      <li>
        <Link to="/projects" className="header-name">
          Projects
        </Link>
      </li>
    </div>
  );
};

export default Navbar;
