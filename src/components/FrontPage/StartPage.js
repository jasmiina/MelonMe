import React from "react";

import { useMediaQuery } from 'react-responsive';

import classes from './StartPage.module.css';
import mobileClasses from './mobile/MobileStartPage.module.css';
import AdText from "./AdText";
import melonImage from '../../assets/melon-startpage-graphic.png';

function StartPage() {

  const isTabletDevice = useMediaQuery({
    query: "(max-device-width: 948px)",
  });

  return (
    <div
      className={isTabletDevice ? mobileClasses['main-container'] :
        classes['main-container']}>
      <AdText />
      <div className={isTabletDevice ? mobileClasses['image-container'] :
        classes['image-container']}>
        <img
          src={melonImage}
          alt=''
          className={classes.image}
          style={isTabletDevice ? { marginTop: '1.4rem' } : {}} />
      </div>

    </div>

  );
};

export default StartPage;