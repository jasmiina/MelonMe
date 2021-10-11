import React, { useRef, useState } from "react";

import { useHistory } from 'react-router-dom';

import APIstr from '../../sensitive-info/signupAPI';

function SignUpForm(props) {

  const history = useHistory(); //used to redirect user after signup

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const usernameInputRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //add username to redux

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
          //Configuring error message for the user:
          let errorMessage = 'Sign up failed!';
          if (data && data.error && data.error.message) {
            if (data.error.message === 'INVALID_EMAIL') {
              errorMessage += ' Invalid e-mail address.';
            }
            else if (data.error.message === 'WEAK_PASSWORD : Password should be at least 6 characters') {
              errorMessage += ' Password should be at least 6 characters.'
            }
            else if (data.error.message === 'EMAIL_EXISTS') {
              errorMessage += ' The email address is already in use.'
            }
            else {
              errorMessage += ' ' + data.error.message;
            }

          }
          throw new Error(errorMessage);
        });
      }
    })
      .then((data) => {
        history.push('/form?show=login');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <React.Fragment>
      <h3 className={props.classes.title}>Sign Up</h3>
      <form onSubmit={submitHandler}>
        <div className={props.classes['input-container']}>
          <label
            className={props.classes['input-label']}
            htmlFor='text'>Username</label>
          <input
            className={props.classes.input}
            type='text'
            required
            ref={usernameInputRef}
          >
          </input>
        </div>
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
              Create Account
            </button>}
        </div>
      </form>
    </React.Fragment>
  );
};

export default SignUpForm;