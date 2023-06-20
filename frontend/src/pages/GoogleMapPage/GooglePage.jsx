import React, { useRef, useState,useEffect } from "react";
import {GoogleMap, useJsApiLoader, Marker, Autocomplete, DirectionsRenderer} from "@react-google-maps/api";
import "./GooglePage.css";



const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 41.85003,
  lng: -87.65005,
};

const GooglePage = () => {
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [locationSelectedOption, setLocationSelectedOption] = useState('');
  const originRef = useRef(null);// hook in React is used to create a mutable reference that can persist across re-renders of a functional component.
  const destinationRef = useRef(null);
  
  // The isLoaded property is provided by the useJsApiLoader hook from the @react-google-maps/api package.
  //  It indicates if the the Google Maps JavaScript API has been loaded and is ready for use in the app.
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyClV0CGLERxqtIe6ull7TumyTHq23H1kS4',
    libraries: ['places'],
  });

  const onLoad = (map) => {
    setMap(map);
    initMap(); // i need to call the initmap function to initialize the markers. 
  };

  const onUnmount = () => {
    setMap(null);
  };

  const calculateRoute = async () => {
    if (!originRef.current.value || !destinationRef.current.value) {
      return;
    }

    const directionService = new window.google.maps.DirectionsService();
    const response = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(response);
    setDistance(response.routes[0].legs[0].distance.text);
    setDuration(response.routes[0].legs[0].duration.text);
  };
  // This function clears the route replacing the inputs with empty string aka null
  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    originRef.current.value = '';
    destinationRef.current.value = '';
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (isLoaded && map && window.initMap) {
    initMap(); 
    }
  }, [isLoaded, map]);//!including these values as dependencies, the effect will be re-run whenever any of them change. 
  //!This ensures that the map is fetched again with the updated values whenever the user adds, views,or deleteds markers to the map.
  //!Without specifying the dependencies, the effect would only run once when the 
  //!component mounts and would not respond to changes in markers.
  
  
 
  const options = [
    { value: 0, label: 'Rehobeth Beach,DE'},
    { value: 1, label: 'Grand Canyon' },
    { value: 2, label: 'Los Angeles CA' },
    { value: 3, label: 'Las Vagas, NV' },
    { value: 4, label: 'Detroit, MI' },
    { value: 5, label: 'Myrtle Beach' },
    { value: 6, label: 'Seattle. WA' },
    { value: 7, label: 'Lake Superior, MI' },


    { value: 8, label: 'Pictured Rocks, MI' },
    { value: 9, label: 'Hotel Tellurides' },
    { value: 10, label: 'Alta Resort,UT' },
    { value: 11, label: 'Virgina Beach, VA' },
    { value: 12, label: 'MOAB Desert' },
    { value: 13, label: 'Key West, FL' },
    { value: 14, label: 'Grand Junction' },
    { value: 15, label: 'chincoteague island' },
    { value: 16, label: 'Reno, NV' },
// Add more options later
    // { value: 17, label: 'Grand Canyon' },
    // { value: 18, label: 'Grand Canyon' },
    // { value: 19, label: 'Grand Canyon' },
    // { value: 20, label: 'Grand Canyon' },
    // { value: 21, label: 'Grand Canyon' },
    // { value: 22, label: 'Grand Canyon' },
    // { value: 23, label: 'Grand Canyon' },
    // { value: 24, label: 'Grand Canyon' },
    // { value: 25, label: 'Grand Canyon' },
    // { value: 26, label: 'Grand Canyon' },
    // { value: 27, label: 'Grand Canyon' },
    // { value: 28, label: 'Grand Canyon' },
    // { value: 29, label: 'Grand Canyon' },
    // { value: 30, label: 'Grand Canyon' },
    
  ];
  const markerLocations = [
    { lat: 38.715519, lng: -75.081787, label: 'Rehobeth Beach, DE' },
    { lat: 35.910140, lng: -112.055750, label: 'Grand Canyon' },
    { lat: 34.0522, lng: -118.2437, label: 'Los Angeles CA' },
    { lat: 36.1716, lng: -115.1391, label: 'Las Vagas, NV' },
    { lat: 42.3314, lng: -83.0458, label: 'Detroit, MI' },
    { lat: 33.6891, lng: -78.8867, label: 'Myrtle Beach' },
    { lat: 47.6062, lng: -122.3321, label: 'Seattle. WA' },
    { lat: 47.7231, lng: -86.9407, label: 'Lake Superior, MI' },
    { lat: 46.5688, lng: -86.3186, label: 'Pictured Rocks, MI' },
    { lat: 37.937492, lng:  -107.812286, label: 'Hotel Tellurides' },
    { lat: 40.5777, lng: -111.6240, label: 'Alta Resort,UT' },
    { lat: 36.8516, lng: -75.9792, label: 'Virgina Beach, VA' },
    { lat: 38.5734, lng: -109.5498, label: 'MOAB Desert' },
    { lat: 24.5551, lng: -81.7800, label: 'Key West, FL' },
    { lat: 39.0639, lng: -108.55062, label: 'Grand Junction' },
    { lat: 37.9332, lng: -75.3788, label: 'Chincoteague island' },
    { lat: 39.5299, lng: -119.8143, label: 'Reno, NV' },

//Add more later
    // { lat: 41.854, lng: -87.652, label: 'Marker 18' },
    // { lat: 41.854, lng: -87.652, label: 'Marker 19' },
    // { lat: 41.854, lng: -87.652, label: 'Marker 20' },
    // { lat: 41.854, lng: -87.652, label: 'Marker 21' },
    // { lat: 41.854, lng: -87.652, label: 'Marker 22' },
    // { lat: 41.854, lng: -87.652, label: 'Marker 23' },
    // { lat: 41.854, lng: -87.652, label: 'Marker 24' },
    // { lat: 41.854, lng: -87.652, label: 'Marker 25' },
    // { lat: 41.854, lng: -87.652, label: 'Marker 26' },
    // { lat: 41.854, lng: -87.652, label: 'Marker 27' },
    // { lat: 41.854, lng: -87.652, label: 'Marker 28' },
    // { lat: 41.854, lng: -87.652, label: 'Marker 29' },
    // { lat: 41.854, lng: -87.652, label: 'Marker 30' },
    
    
  ];




  let markers =useRef([]);
  
  function initMap() {
    if (map) {
      map.addListener("click", (event) => {
        addMarker(event.latLng);
      });
  
      if (locationSelectedOption === 'Rehobeth Beach, DE') {
        showMarker(0);
      } if (locationSelectedOption === 'Grand Canyon') {
        showMarker(1);
      } else if (locationSelectedOption === 'Los Angeles, CA') {
        showMarker(2);
      }  if (locationSelectedOption === 'Las Vagas, NV') {
        showMarker(3);
      }  if (locationSelectedOption === 'Detroit, MI') {
        showMarker(4);
      }  if (locationSelectedOption === 'Myrtle Beach') {
        showMarker(5);
      }  if (locationSelectedOption === 'Lake Superior, MI') {
        showMarker(6);
        }  if (locationSelectedOption === 'Pictured Rocks, MI') {
        showMarker(7);
      }  if (locationSelectedOption === 'Hotel Tellurides') {
        showMarker(8);
      }  if (locationSelectedOption === 'Alta Resort,UT') {
        showMarker(9);
      }  if (locationSelectedOption === 'Virgina Beach, VA') {
        showMarker(10);
      }  if (locationSelectedOption === 'MOAB Desert') {
        showMarker(11);
      }  if (locationSelectedOption === 'Key West, FL') {
        showMarker(12);
      }  if (locationSelectedOption === 'Grand Junction') {
        showMarker(13);
      } else if (locationSelectedOption === 'Chincoteague island') {
        showMarker(14);
      // } else if (locationSelectedOption === 'Reno, NV') {
      //   showMarker(15);
      // } else if (locationSelectedOption === 'marker3') {
      //   showMarker(16);
      // } else if (locationSelectedOption === 'marker3') {
      //   showMarker(17);
      // } else if (locationSelectedOption === 'marker3') {
      //   showMarker(18);
      // } else if (locationSelectedOption === 'marker3') {
      //   showMarker(19);
      // } else if (locationSelectedOption === 'marker3') {
      //   showMarker(20);
      // } else if (locationSelectedOption === 'marker3') {
      //   showMarker(21);
      // } else if (locationSelectedOption === 'marker3') {
      //   showMarker(22);
      // } else if (locationSelectedOption === 'marker3') {
      //   showMarker(23);
      // } else if (locationSelectedOption === 'marker3') {
      //   showMarker(24);
      // } else if (locationSelectedOption === 'marker25') {
      //   showMarker(25);
      // } else if (locationSelectedOption === 'marker26') {
      //   showMarker(26);
      // } else if (locationSelectedOption === 'marker27') {
      //   showMarker(27);
      // } else if (locationSelectedOption === 'marker28') {
      //   showMarker(28);
      // } else if (locationSelectedOption === 'marker29') {
      //   showMarker(29);
      // } else if (locationSelectedOption === 'marker30') {
      //   showMarker(30);
      }
      
      // Adds event listeners for the buttons
      document.getElementById("show-markers").addEventListener("click", showMarkers);
      document.getElementById("hide-markers").addEventListener("click", hideMarkers);
      document.getElementById("delete-markers").addEventListener("click", deleteMarkers);
    }
  }
  function showMarker(index) {
    hideMarkers();
    const location = markerLocations[index];
      new window.google.maps.Marker({
        position: location,
        map: map,
      })
  };
  //adds a marker to the map and push to array

    function addMarker(position){
    let marker =new window.google.maps.Marker({
      position,
      map:map,
    });
    markers.current.push(marker);
  }
  //set the map on all markers in the array
  function setMapOnAll(map){
    for (let i = 0; i< markers.current.length; i++){
      markers.current[i].setMap(map);
    }
  }
  //Removes the markers from the map
  function hideMarkers(){
    setMapOnAll(null);
  }
  function showMarkers() {
    setMapOnAll(map);
  }

  // Deletes all markers in the array by removing references to them.
  function deleteMarkers() {
    hideMarkers();
    markers.current = [];
  };

let handleOptionChange = (event) => {
  setLocationSelectedOption(event.target.value);
  showMarker(event.target.value);
};
   



  return isLoaded ? (
    
    <div className="background">
      <div class="container">
  <div class="row">
    <div class="col">
      <div>
        <h3> Select your location from the drop down and see if the vacation destination is somewhere you want to explore. If not return to the Random Destination generator.</h3>
      <select class="form-select" aria-label="Default select example" value={locationSelectedOption} onChange={handleOptionChange}>
  <option value="">Select your location</option>
  {options.map((option) => (
    <option value={option.value}>{option.label}</option>
  ))}
</select>
      </div>
    </div>
    <div class="col">
      <div>
      <section className="SearchBoxHolder">
        <div id="floating-pannel">
          <h3>Enter your address and the location you are traveling to.<br/> The distance and duration are shown below.</h3>
          <br/>
          <Autocomplete>
            <input  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" type='text' placeholder="Starting Point" ref={originRef} />
          </Autocomplete>
          <br/>
          <Autocomplete>
            <input class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" type='text' placeholder="Destination" ref={destinationRef} />
          </Autocomplete>
          <br/>
          <div className="googlebutton">
          <button class="btn btn-dark" type='submit' onClick={calculateRoute}> Take a look at your route!</button> 
          </div>
          <div className="googlebutton">
          <button class="btn btn-dark" type='submit' onClick={clearRoute}>Clear Route</button>
          </div>
          {/* This renders only if there is a value in the input boxes, it will not show otherwise. */}
          
        </div>
      </section>
      <div>
      </div>
    </div>
  </div>
</div>
      
          {distance && <p>Distance: {distance}</p>}
          {duration && <p> Duration: {duration}</p>}
        {/* This shows you the actual google map */}
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <div position={center} />
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>
        {isLoaded && map && window.initMap && window.initMap()}
    
        
      </div>
    </div>
    
  
  ) : null;
};

export default GooglePage;


