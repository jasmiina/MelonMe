import React from "react";

import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import classes from './AdText.module.css';
import mobileClasses from './mobile/MobileAdText.module.css';
import buttonStyle from '../UI/Buttons.module.css'

function AdText() {

  const isTabletDevice = useMediaQuery({
    query: "(max-device-width: 948px)",
  });
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 550px)",
  });

  return (
    <section
      className={
        isTabletDevice ?
          mobileClasses['text-container'] :
          classes['text-container']} >
      <h3 style={isMobileDevice ? { fontSize: '3rem' } : {}}>Be Healthier. Eat a Melon.</h3>
      <h4 style={isMobileDevice ? { fontSize: '2rem' } : {}}>Get inspired and inspire others towards a healthier lifestyle.</h4>
      <Link
        to='/form?show=signup'
        className={buttonStyle.button}
        style={isMobileDevice ? {
          fontSize: '1.3rem',
          padding: '1.1rem',
          marginBottom: '5rem'
        } : {}}
      >Get Started</Link>
    </section>
  );
};

export default AdText;