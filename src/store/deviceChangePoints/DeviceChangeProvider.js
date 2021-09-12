import { useMediaQuery } from 'react-responsive';

const DeviceContext = React.createContext({});

const deviceContext = {
  isTabletDevice: useMediaQuery({
    query: "(max-device-width: 948px)",
  }),
  isMobileDevice: useMediaQuery({
    query: "(max-device-width: 550px)",
  }),
};

function DeviceChangeProvider(props){
  return(
    <DeviceContext.Provider value={deviceContext}>
      {props.children}
    </DeviceContext.Provider>
  )
};

export default DeviceChangeProvider;