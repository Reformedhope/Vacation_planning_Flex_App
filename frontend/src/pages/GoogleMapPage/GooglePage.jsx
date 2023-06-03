import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import {GoogleMap, useJsApiLoader, Marker, Autocomplete, DirectionsRenderer} from "@react-google-maps/api";
// import useAuth from "../../hooks/useAuth";
// import useCustomForm from "../../hooks/useCustomForm";
// import axios from "axios";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



// This is the size of the map
const containerStyle = {
  width: '600px',
  height: '400px'
};


// This is where you are centering the map for the starter place when the map loads
const center = {
  lat: 41.85003,
  lng: -87.65005,
};

const GooglePage = (props) => {
  
  const[map, setMap] = React.useState(/** @type google.maps.map */(null))
  const [route, setRoute] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration , setDuration] = useState('')

  const startingPointRef = useRef()

  const destinationRef = useRef()
  
  const {isLoaded} = useJsApiLoader({
    id:'google-map-script',
    googleMapsApiKey: 'AIzaSyClV0CGLERxqtIe6ull7TumyTHq23H1kS4',
    libraries: ['places'],
  })


 

  let onLoad = React.useCallback(function callback(map){
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  },[])

  const onUnmount = React.useCallback(function callback(map){
    setMap(null)
  },[])


  
  // async function calculateRoute(){
  //   if (startingPointRef.current.value === '' || destinationRef.current.value === ''){
  //     return
  //   }
  //   const directionService =new google.maps.DirectionService()
  //   const results = await directionService.route({
  //     startingPoint: startingPointRef.current.value,
  //     destination: destinationRef.current.value,
  //     travelMode:google.maps.TravelMode.DRIVING
  //   })
  //   setDirectionResponse(results)
  //   setDistance(results.routes[0].legs[0].distance.text)
  //   setDuration(results.routes[0].legs[0].distance.text)
  // }

  // function clearRoute(){
  //   setDirectionResponse(null)
  //   setDistance('')
  //   setDuration('')
  //   startingPointRef = '';
  //   destinationRef = '';

  // }


  return isLoaded ? (
    
    <div>
        <section className="SearchBoxHolder">
        <div id="floating-pannel">
          <Autocomplete>
          <input type = 'text' placeholder="Starting Point" ref = {startingPointRef}/>
          </Autocomplete>
          <Autocomplete>
          <input type = 'text' placeholder="Destination" ref={destinationRef}/>
          </Autocomplete>

        {/* <button className="" type= 'submit' onClick={calculateRoute}>Get Route </button>
        <button className="" type= 'submit' onClick={clearRoute}>Get Route </button> */}

        </div>
      </section>
     
      {/* <marker>

      </marker> */}

 
    <div>
    <GoogleMap
    mapContainerStyle={containerStyle}
    center = {center}
    zoom={5}
    // onLoad={onLoad}
    onUnmount={onUnmount}
    onLoad = {(map) => setMap(map)}
    >
    {/* <marker postion ={center}/>{directionsResponse &&( DirectionsRenderer directions={directionsResponse} /> */}
    {/* )} */}
    
   </GoogleMap>
    <Link to  ="ListPage"> Create a List!</Link>

   </div>
   </div>
  ):<></>
};

export default GooglePage;








