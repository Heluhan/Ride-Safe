import React, { Component } from 'react';
import {BikeMarker} from './BikeMarker.js';

export let oldMarkers = [];


export const MarkerList = (props) => {

  const proxs = props.prox;
  // console.log('props: ', props);

  const [markers, setMarkers] = React.useState([]);

  

  // console.log(markers);

  React.useEffect(() => {
    for (const m of oldMarkers) {
      if (m !== null)
        m.setMap(null);
    }
    setMarkers(proxs.map((prox) => {
      return <li key={prox.geoHash}><BikeMarker map={props.map} position={{lat: prox.lat, lng: prox.lng}}/></li>
     
     }));
  }, [proxs, props]);

  return (
    <ul>{markers}</ul>
  );

};
