import React from 'react';
import geolocation from 'geolocation';
import {db} from '../../firestore.js';
import { collection, addDoc, setDoc, query, limit, doc, getDocs, startAt, endAt } from "firebase/firestore";
import * as geofire from 'geofire-common';
import {getDistance} from 'geolib';
import {DeviceUUID} from 'device-uuid';
import { readDocs } from '../../readDocs.js';
import {MODE} from '../ToggleSwitch/ToggleSwitch.js'


const filterPos = (arr, center) => {

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];

    let dist = getDistance({latitude: elem.lat, longitude: elem.lng}, {latitude: center.lat, longitude: center.lng}, 1)
    // console.log(center.geoHash, elem.geoHash);
    if (dist < 5000000 && center.geoHash !== elem.geoHash) {
      newArr.push(elem);
    }
  }

  return newArr;
}


let prevLoc = [0, 0];
let first = 0;
export const Map = ({children}) => {

  // document.getElementById('pls').addEventListener("click", (change) => {

  // biker = document.getElementById('warning').style.visibility === 'visible' ? 0 : 1;
  // console.log(biker);
  // })
  // var biker = false;

  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  const [lat, setLat] = React.useState();//43.67
  const [lng, setLng] = React.useState();//-79.38

  const [change, setChange] = React.useState(true);
  const [prevLoc, setPrevLoc] = React.useState([0, 0]);
 
  const [prox, setProx] = React.useState([]);


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
    let biker = MODE;


    setLat(pos.coords.latitude);
    setLng(pos.coords.longitude);
    // console.log('Bullshit: ', lat, lng);

    const diff = getDistance({latitude: lat, longitude: lng}, {latitude: prevLoc[0], longitude: prevLoc[1]}, 1);
    if (biker && ((diff > 5 && diff < 100 ) || first < 3)) {
      first ++;

      // console.log('BIKERRRR');
      
      let uuid = new DeviceUUID().get()
      try {
        const hash = geofire.geohashForLocation([lat, lng]);
        // console.log(lat, lng);


        if (hash) {

          let newA = uuid.split('-');
          let mac = newA[newA.length - 1];
          // console.log(mac); 
          await setDoc(doc(db, "bikers", mac), {
            geoHash: hash,
            lat: lat,
            lng: lng,
          });
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setPrevLoc([lat, lng]);
      setProx([]);
    } else if (!biker) {

      // console.log('DRIVERR');


      const diff = getDistance({latitude: lat, longitude: lng}, {latitude: prevLoc[0], longitude: prevLoc[1]}, 1);
      if ((diff > 5 && diff < 100 ) || first < 2) {
        first++;
        
        // console.log(lat, lng);

        // const center = [43, lng];
        // const radiusInM = 10000;

        
        // // Each item in 'bounds' represents a startAt/endAt pair. We have to issue
        // // a separate query for each pair. There can be up to 9 pairs of bounds
        // // depending on overlap, but in most cases there are 4.
        // const bounds = geofire.geohashQueryBounds(center, radiusInM);
        // console.log(center);
        
        // let queries = [];

        // console.log('BOUNDS: ', bounds);
        // for (const b of bounds) {
        //   const q = query(collection(db, "bikers"), orderBy('geoHash', 'asc'), startAt(b[0]), endAt(b[1]));
        //   queries.push(q);
        // }
        // console.log('questeries', queries);
        // let docs = [];
        // try {
          
        //   for (const q of queries) {
        //     console.log('query: ',q);
        //     const querySnapshot = await getDocs(q);
        //     console.log(querySnapshot);
        //     const docs_= readDocs(querySnapshot);
  
        //     docs.push(docs_);
        //   }
          
        //   console.log('Docs: ', docs);

        // } catch (e) {
        //   console.log('Error ', e);
        // }
        const hash = geofire.geohashForLocation([lat, lng]);
        const center = {lat: lat, lng: lng, geoHash: hash};
        const q = query(collection(db, "bikers"), limit(10));
        const docRefs = await getDocs(q);
        const docs = readDocs(docRefs)

        const marks = filterPos(docs, center);
        setProx(marks);



      }

    }
  });

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
        return React.cloneElement(child, { map, lat, lng , prox });
      }
    })}
  </>
);

};