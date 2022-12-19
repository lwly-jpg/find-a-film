import React from "react";
import typeLogo from "../images/typeface-based-logo.png";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__header">
        <img className="nav__logo" src={typeLogo} alt="logo" />
      </div>
    </nav>
  )
}

export default Nav;