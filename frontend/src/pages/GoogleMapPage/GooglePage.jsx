import React, { useRef, useState } from "react";
import {GoogleMap, useJsApiLoader, Marker, Autocomplete, DirectionsRenderer} from "@react-google-maps/api";
import { Link } from "react-router-dom";

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

  const originRef = useRef(null);
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


  // let markers = [];
  const markers =useRef([]);
  function  initMap(){
    if (map)
    
      // This event listener will call addMarker() when the map is clicked.
    map.addListener("click",(event) => {
      addMarker(event.latLng);
    });
    
    // adds event listeners for the buttons
    document.getElementById("show-markers")
    .addEventListener("click",showMarkers);
    
    document
    .getElementById("hide-markers")
    .addEventListener("click", hideMarkers);
    
    document
    .getElementById("delete-markers")
    .addEventListener("click",deleteMarkers);
  }

  //adds a marker to the map and push to array
  function addMarker(position){
    const marker =new window.google.maps.Marker({
      position,
      map:map,
    });
    markers.push(marker);
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

  //shows any markers currently  in the array
  function showMarkers(){
    setMapOnAll(map);
  }
  // Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  hideMarkers();
  markers = [];
}

  
  // window.initMap  = initMap;




  return isLoaded ? (
    
    <div>
      <section className="SearchBoxHolder">
        <div id="floating-pannel">
          <Autocomplete>
            <input type='text' placeholder="Starting Point" ref={originRef} />
          </Autocomplete>
          <Autocomplete>
            <input type='text' placeholder="Destination" ref={destinationRef} />
          </Autocomplete>
          <button className="" type='submit' onClick={calculateRoute}> Take a look at your route!</button>
          <button className="" type='submit' onClick={clearRoute}>Clear Route</button>
          {/* This renders only if there is a value in the input boxes, it will not show otherwise. */}
          {distance && <p>Distance: {distance}</p>}
          {duration && <p> Duration: {duration}</p>}
        </div>
      </section>
      <div>

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
        <div id="floating-panel">
      <input id="hide-markers" type="button" value="Hide Markers" />
      <input id="show-markers" type="button" value="Show Markers" />
      <input id="delete-markers" type="button" value="Delete Markers" />
    </div>

        {/*This is not working? */}
        <Link to="ListPage">Create a List!</Link>
        (navigate)
      </div>
    </div>
  ) : null;
};

export default GooglePage;


