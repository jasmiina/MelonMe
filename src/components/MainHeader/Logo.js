import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import classes from './Logo.module.css';

function Logo() {

  const isTabletDevice = useMediaQuery({
    query: "(max-device-width: 948px)",
  });
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 550px)",
  });

  let style = {};
  if(isTabletDevice){
    if(isMobileDevice){
      style = {
        marginRight: '1rem', 
        fontSize: '1.4rem'
      }
    }
    else{
      style = {
        fontSize: '1.7rem',
      }
    }
  };

  return (
    <button 
    className={classes.button}
    style={isTabletDevice ? {marginLeft: '2rem'} : {}}>
      <Link 
      to="/welcome"
      style={{textDecoration: 'none'}}>
        <h1 
        className={classes.h1}
        style={style}
        >MelonMe</h1>
      </Link>

    </button>

  );
};

export default Logo;