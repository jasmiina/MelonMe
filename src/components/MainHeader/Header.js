
import {Link} from 'react-router-dom';

import LoginButton from "./LoginButton";
import Logo from "./Logo";
import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <Logo />
      <div>
        <Link className={classes['header-links']} to='/explore'>Explore</Link>
        <Link className={classes['header-links']} to='/about'>About</Link>
        <Link className={classes['header-links']} to='/contact'>Contact</Link>
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;