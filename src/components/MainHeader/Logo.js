import { Link } from 'react-router-dom';

import useMediaQueries from '../../hooks/use-media-queries';
import classes from './Logo.module.css';

function Logo() {

  const isTabletDevice = useMediaQueries('tablet');
  const isMobileDevice = useMediaQueries('mobile');

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