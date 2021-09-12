
import { Link } from 'react-router-dom';

import classes from './NavMenu.module.css';

function NavMenu() {
  return (
    <ul className={classes.navMenu}>
      <li>
        <Link className={classes['header-links']} to='/explore'>Explore</Link>
      </li>
      <li>
        <Link className={classes['header-links']} to='/about'>About</Link>
      </li>
      <li>
        <Link className={classes['header-links']} to='/contact'>Contact</Link>
      </li>
    </ul>
  );
};

export default NavMenu;