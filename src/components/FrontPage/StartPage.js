import React from "react";

import classes from './StartPage.module.css';
import mobileClasses from './mobile/MobileStartPage.module.css';
import AdText from "./AdText";
import melonImage from '../../assets/melon-startpage-graphic.png';
import useMediaQueries from '../../hooks/use-media-queries';

function StartPage() {

  const isTabletDevice = useMediaQueries('tablet');

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