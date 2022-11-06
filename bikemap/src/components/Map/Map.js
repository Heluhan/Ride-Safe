import React from 'react';
import geolocation from 'geolocation';
import {db} from '../../firestore.js';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import * as geofire from 'geofire-common';


var count = 0;
const startTime = Date.now();

export const Map = ({children}) => {

  var biker = true;

  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  const [lat, setLat] = React.useState(3);//43.67
  const [lng, setLng] = React.useState(20);//-79.38

  const [change, setChange] = React.useState(true);

 

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

  navigator.geolocation.watchPosition(async (pos) => {

    setLat(pos.coords.latitude);
    setLng(pos.coords.longitude);

    const diff = (Date.now() - startTime) % 1000;
    if (biker && diff === 0) {

      try {

        // const hash = geofire.geohashForLocation([lat, lng])
        const hash = 'test'
        if (hash) {
          const docRef = await addDoc(collection(db, "bikers"), {
          geoHash: hash,
          lat: lat,
          lng: lng,
          createdAt: Timestamp.now()
          });
          console.log("Document written with ID: ", docRef.id);
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      console.log(diff);


    } else if (count < 1) {


      console.log(count + 1);

    }


  }, (err) => {console.log(err);}, {maximumAge: 2000});

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
        return React.cloneElement(child, { map, lat, lng });
      }
    })}
  </>
);

};