import React from "react";


import { Route, Redirect, Switch } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import StartPage from "./components/FrontPage/StartPage";
import FormPage from "./components/FormPage/FormPage";
import ExplorePage from "./components/HeaderPages/ExplorePage";
import AboutPage from "./components/HeaderPages/AboutPage";
import ContactPage from "./components/HeaderPages/ContactPage";
import Header from "./components/MainHeader/Header";
import wrapperClass from './components/UI/wrapper.module.css';

import MobileHeader from "./components/MainHeader/mobile/MobileHeader";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";


function App() {

  const isSmallerDevice = useMediaQuery({
    query: "(max-device-width: 948px)",
  });

  return (
    <div>
      {isSmallerDevice ? <MobileHeader /> : <Header />}
      <main className={wrapperClass.wrapper}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path='/MelonMe'>
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
            <NotFoundPage />
          </Route>
        </Switch>

      </main>
    </div>
  );
}

export default App;
