import React from 'react';

const google = window.google;

export const Map = ({children}) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  const [lat, setLat] = React.useState(0);
  const [lng, setLng] = React.useState(0);

  const [change, setChange] = React.useState(true);


  React.useEffect(() => {

    const options = {
      zoom: 12,
      center: {lat: lat, lng: lng}
    };
    console.log(map);

    if (ref.current && !map ) {
      setMap(new window.google.maps.Map(ref.current, options));
    } else if (ref.current && change) {
        setMap(new window.google.maps.Map(ref.current, options));
        setChange(false);
    } else {
        setChange(true);
    }
  }, [ref, map, lat, lng]);


  return (
  <>

    <form onSubmit={(e) => {e.preventDefault()}}>
      <label>
        Latitude:
        <input type='Number' step='any' id='latValue' value={lat} onChange={(e) => {setLat(Number(e.target.value))}} name='someName'/>
      </label>

      <label>
        Longitude:
        <input type='Number' id='lngValue' step='any' value={lng} onChange={(e) => {setLng(Number(e.target.value))}} name='someName2'/>
      </label>

      <input type='submit' value="latSubmit" />

    </form>



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