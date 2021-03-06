import React from "react";


import { Route, Redirect, Switch } from 'react-router-dom';

import StartPage from "./components/FrontPage/StartPage";
import FormPage from "./components/FormPage/FormPage";
import ExplorePage from "./components/HeaderPages/ExplorePage";
import AboutPage from "./components/HeaderPages/AboutPage";
import ContactPage from "./components/HeaderPages/ContactPage";
import Header from "./components/MainHeader/Header";
import wrapperClass from './components/UI/wrapper.module.css';
import MobileHeader from "./components/MainHeader/mobile/MobileHeader";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import useMediaQueries from './hooks/use-media-queries';

//TODO: Remember to add auth checks for routes that can only be used after logging in

function App() {

  const isSmallerDevice = useMediaQueries('tablet');

  return (
    <React.Fragment>
      {isSmallerDevice ? <MobileHeader /> : <Header />}
      <main className={wrapperClass.wrapper}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path='/welcome'>
            <StartPage />
          </Route>
          <Route path='/form'>
            <FormPage />
          </Route>
          <Route path='/explore'>
            <ExplorePage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/contact'>
            <ContactPage />
          </Route>
          <Route path='*'>
            <StartPage />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
