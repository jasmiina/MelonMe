import React from 'react';

import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import buttonStyle from '../UI/Buttons.module.css'
import { logoutHandler } from '../../store/auth-slice';

function LoginButton() {

  const isTabletDevice = useMediaQuery({
    query: "(max-device-width: 948px)",
  });
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 550px)",
  });

  //Modify button style based on device width:
  let style = {
    marginRight: '5rem',
    paddingTop: '0.7rem',
    paddingBottom: '0.7rem',
    textDecoration: 'none'
  };
  if (isTabletDevice) {
    if (isMobileDevice) {
      style = {
        paddingTop: '0.7rem',
        paddingBottom: '0.7rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        fontSize: '1.1rem',
      };
    }
    else {
      style = {
        paddingTop: '0.6rem',
        paddingBottom: '0.6rem',
        fontSize: '1.4rem',
      }
    }
  }

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();
  function dispatchLogOut(){
    dispatch(logoutHandler())
  };

  const logInButton = (
    <Link
      to='/form?show=login'
      className={buttonStyle.button}
      style={style}>
      Log In
    </Link>
  );

  const logOutButton = (
    <Link
      to='/welcome'
      className={buttonStyle.button}
      style={style}
      onClick={()=> dispatchLogOut()}
      >
      Log Out
    </Link>
  );

  return (
    <React.Fragment>
      {isLoggedIn ? logOutButton : logInButton}
    </React.Fragment>
  );
};

export default LoginButton;