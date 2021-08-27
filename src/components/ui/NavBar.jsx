import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar is-info"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/">
            Home
          </NavLink>
          <NavLink className="navbar-item" to="/HCI">
            HCI
          </NavLink>
          <NavLink className="navbar-item" to="/FISotware">
            Ingeniería Soft
          </NavLink>
          <NavLink className="navbar-item" to="/RedesII">
            Redes II
          </NavLink>
        </div>
        <div className="navbar-menu ">
          <div className="navbar-start"></div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
