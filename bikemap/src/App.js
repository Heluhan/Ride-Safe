import logo from './logo.svg';
import './App.css';
import Mode from './components/mode.js';
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {Map} from './components/Map/Map.js';
import { Marker } from './components/Marker/Marker.js';
import Warning from './components/warning/warning.js';
import {MarkerList} from '../src/components/MarkerList/MarkerList.js'


const render = (status) => {
  return <h1>{status}</h1>;
};


function App() {
  return (
    <div style={{position: 'relative'}}>
      <div>
        <Wrapper apiKey={"AIzaSyAaMJ3r0-h8QvRBLALgLT8UkylxxmHygaE"} render={render}>
          <Map id="map">
            <Marker position={{lat: 43.6532, lng: -79.3832}}/>
            <MarkerList/>
          </Map>
        </Wrapper>
        
      </div>

      <Warning/>

      <Mode/>

      
    </div>
  );
}

export default App;
