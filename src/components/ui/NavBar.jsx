import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar is-light has-text-danger"
        role="navigation"
        aria-label="dropdown navigation"
      >
        <div className="navbar-item has-dropdown is-hoverable">
          <span className="navbar-link">Cuarto</span>
          <div className="navbar-dropdown">
            <NavLink className="navbar-item" to="/ADMBDD">
              Adm. BDD
            </NavLink>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <span className="navbar-link">Quinto</span>
          <div className="navbar-dropdown">
            <NavLink className="navbar-item" to="/HCI">
              HCI
            </NavLink>
            <NavLink className="navbar-item" to="/FISotware">
              Ingeniería Soft
            </NavLink>
            <NavLink className="navbar-item" to="/RedesII">
              Redes II
            </NavLink>
            <NavLink className="navbar-item" to="/DesarrolloWeb">
              Desarrollo Web
            </NavLink>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <span className="navbar-link bg-dark">Sexto</span>
          <div className="navbar-dropdown">
            <NavLink className="navbar-item" to="/Ing_Requisitos">
              Ingeniería de Requisitos
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
