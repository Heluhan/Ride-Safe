import React from 'react';
import geolocation from 'geolocation';
import {markerPosition} from '../Marker/Marker.js'



export const Map = ({children}) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  const [lat, setLat] = React.useState(3);//43.67
  const [lng, setLng] = React.useState(20);//-79.38

  const [change, setChange] = React.useState(true);

  navigator.geolocation.watchPosition((pos) => {
    // console.log(pos);
    // if (err) {
    //   console.log('Error in getting location');
    // }

    setLat(pos.coords.latitude);
    markerPosition.lat = lat;

    setLng(pos.coords.longitude);
    markerPosition.lng = lng;

    console.log(`Lat ${lat} and Long ${lng}`);
  });

  React.useEffect(() => {

    const options = {
      zoom: 16,
      center: {lat: lat, lng: lng}
    };
    // console.log(map);

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
{/* 
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

    </form> */}


    <div ref={ref} style={{ height: '100vh', width: '100%', position: 'absolute'}} />
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