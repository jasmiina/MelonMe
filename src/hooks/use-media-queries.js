import { useMediaQuery } from 'react-responsive';

function useMediaQueries(mediaName) {
  
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 550px)",
  });
  const isTabletDevice = useMediaQuery({
    query: "(max-device-width: 948px)",
  });

  if(mediaName === 'tablet'){
    return isTabletDevice;
  }
  else if(mediaName === 'mobile') {
    return isMobileDevice;
  }
};

export default useMediaQueries;
