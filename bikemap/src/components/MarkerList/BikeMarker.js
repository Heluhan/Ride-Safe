import React, { Component } from 'react';
import { oldMarkers } from './MarkerList.js';

export const BikeMarker = (options) => {
  const [marker, setMarker] = React.useState();
  // console.log(options);

  React.useEffect(() => {

    if (!marker) {
      // console.log(`Marker Lat ${options.position.lat} and Long ${options.position.lng}`);\
      setMarker(new window.google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      // if (marker) {
      //   marker.setMap(null);
      // }
    };
  }, [marker]);
  React.useEffect(() => {
    if (marker) {
      marker.setMap(null);
      // console.log('New marker ', newOptions);
      marker.setOptions(options);
      oldMarkers.push(marker);
      // console.log(marker);
    }
  }, [marker, options]);
    return null;
    // return (
       
    // <form onSubmit={(e) => {e.preventDefault()}} style={{bottom: '80vh'}}>
    //   <label>
    //     Latitude:
    //     <input type='Number' step='any' id='latValue' onChange={(e) => {markerPosition.lat = Number(e.target.value); console.log('printing');}} name='someName'/>
    //   </label>

    //   <label>
    //     Longitude:
    //     <input type='Number' id='lngValue' step='any' onChange={(e) => {markerPosition.lng = (Number(e.target.value))}} name='someName2'/>
    //   </label>

    //   <input type='submit' value="latSubmit" />

    // </form>


    // );
};