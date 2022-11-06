import React from 'react';

const google = window.google;

export const Map = ({children}) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();
  
  React.useEffect(() => {

    const options = {
      zoom: 12,
      center: {lat: 43.6532, lng: -79.3832}
    };


    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, options));
    }
  }, [ref, map]);


  return (
  <>
    <div ref={ref} style={{ height: '100vh', width: '100%' }} />
    {/* {children} */}
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // set the map prop on the child component
        // @ts-ignore
        return React.cloneElement(child, { map });
      }
    })}
  </>
);

};