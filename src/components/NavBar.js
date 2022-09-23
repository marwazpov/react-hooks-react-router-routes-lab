import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle={
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  textDecoration: "none",
  color: "black",
};


function NavBar() {
  return <div className="navbar">
    <NavLink
      to="/movies"
      exact
      style={linkStyle}
      activeStyle={{
        background:"pink",
      }}
      > Movies
    </NavLink>

    <NavLink
      to="/directors"
      exact
      style={linkStyle}
      activeStyle={{
        background:"pink",
      }}
      > Directors
    </NavLink>

    <NavLink
      to="/actors"
      exact
      style={linkStyle}
      activeStyle={{
        background:"pink",
      }}
      > Actors
    </NavLink>

    <NavLink
      to="/"
      exact
      style={linkStyle}
      activeStyle={{
        background:"pink",
      }}
      > Home
    </NavLink>

  </div>;
}

export default NavBar;
