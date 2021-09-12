import React, { useRef, useState } from "react";

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { loginHandler } from '../../store/auth-slice';
import APIstr from '../../sensitive-info/loginAPI';

function LoginForm(props) {

  const history = useHistory();

  const dispatch = useDispatch();
  function dispatchLogIn(token){
    dispatch(loginHandler(token))
  };

  const [isLoading, setIsLoading] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    fetch(APIstr,
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      }
    ).then(res => {
      setIsLoading(false);
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = 'Login failed! Please check your email and/or password.';

          throw new Error(errorMessage);
        });
      }
    })
      .then((data) => {
        console.log(data);
        dispatchLogIn('temp');
        history.push('/explore');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <React.Fragment>
      <h3 className={props.classes.title}>Log In</h3>
      <form onSubmit={submitHandler}>
        <div className={props.classes['input-container']}>
          <label
            className={props.classes['input-label']}
            htmlFor='email'>Email</label>
          <input
            className={props.classes.input}
            type='email'
            required
            ref={emailInputRef}
          >
          </input>
        </div>
        <div className={props.classes['input-container']}>
          <label
            className={props.classes['input-label']}
            htmlFor='password'>Password</label>
          <input
            className={props.classes.input}
            type='password'
            required
            ref={passwordInputRef}
          >
          </input>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {isLoading ? <p style={{ color: '#243537' }}>Sending...</p> :
            <button
              className={props.classes['submit-button']}>
              Log In
            </button>}
        </div>
      </form>
    </React.Fragment>

  );
};

export default LoginForm;