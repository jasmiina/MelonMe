import React, {useState, useEffect, useMemo} from "react";

import { useLocation, useHistory } from "react-router-dom";

import Card from "../UI/Card/Card";
import classes from './FormPage.module.css';
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

//TODO: add prompt for unwanted route transitions

function FormPage() {

  const [isLogin, setIsLogin] = useState();
  function switchFormHandler(bool){
    setIsLogin(bool);
  };

  //use query params to see whether signup or login should be shown:
  const location = useLocation();
  const history = useHistory();
  const queryParams = new URLSearchParams(location.search);

  function changeShowParam(value){
    history.push(`/form?show=${value}`);
  }

  useEffect(()=> {
    if(queryParams.get('show')==='login'){
      switchFormHandler(true);
    }
    else if(queryParams.get('show')==='signup'){
      switchFormHandler(false);
    };
  }, [queryParams]);

  return (
    <Card>
      <div className={classes.container}>
        {isLogin ? <LoginForm classes={classes}/>
        : <SignUpForm classes={classes}/>}
        {isLogin ? 
        <button 
        className={classes['text-button']}
        onClick={()=> changeShowParam('signup')}
        >New here? Sign up!
        </button> 
        : 
        <button 
        className={classes['text-button']}
        onClick={()=> changeShowParam('login')}
        >Already have an account? Log in!
        </button>}
      </div>
    </Card>
  );
};

export default FormPage;