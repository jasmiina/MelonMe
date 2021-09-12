import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";

import LoginButton from "../LoginButton";
import Logo from "../Logo";
import NavMenu from "./NavMenu";
import classes from './MobileHeader.module.css';

function Header() {

  const [showNavMenu, setShowNavMenu] = useState(false);
  function showNavMenuHandler() {
    setShowNavMenu(!showNavMenu);
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <Logo />
        <LoginButton />
        <button
          className={classes['hamburger-menu-button']}
          onClick={() => showNavMenuHandler()}>
          <AiOutlineMenu className={classes['hamburger-menu-icon']} />
        </button>
      </header>
      {showNavMenu && <NavMenu/>}
    </React.Fragment>

  );
};

export default Header;