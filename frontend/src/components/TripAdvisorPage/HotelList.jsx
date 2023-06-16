import axios from "axios";
import { useEffect, useState } from "react";
import Geocode from "react-geocode";
import {Autocomplete} from "@react-google-maps/api";


const HotelList = () => {
    const[hotels, setHotels]=useState([]);
    const[toDate, setToDate]=useState('');
    const[fromDate, setFromDate] =useState('');
    const[address, setAddress] = useState("");
    // const[lat, setLat] = useState("");
    // const[lng, setLng] = useState("");
    const[location, setLocation] =useState({lat:0,lng:0})
    
  
    // const [user, token] = useAuth();
    Geocode.setApiKey("AIzaSyDtdf0GQW4QRWvnh2AMXwXCvBTbGyyG58g");
  // gethotelLocation take in an address as an input which is using the input box down below. // Get latitude & longitude from address
  async function gethotelLocation(address){
    debugger
    try{
    let response = await Geocode.fromAddress("Chicago, IL"); // This line as the code to wait untill it pull ths cordinated for the address 
    //entered into the input box. using Geocode here instead of using http response to input the information is a quick step to providing back the cordinates. 
    if (response && response.results && response.results.length > 0) {
      let {lat, lng}= response.result[0].geometry.location; //
    setLocation({lat,lng});
    // setLocation(lng);
    console.log("No results found for the address:", address);
  }
} catch (error) {
  console.log("Error in geocode address", error);
}
}
	async function fetchHotels() {
    try {
      let response = await axios.get(`https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation?latitude=${location.lat}&longitude=${location.lng}&checkIn=${fromDate}&checkOut=${toDate}&pageNumber=1&currencyCode=USD`,
        {
					headers: {
			      'X-RapidAPI-Key':  '3209788d98msh7972559b7c7ebe3p199943jsn5a92dd09c0e7',
						'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
					},
        }
			);
      console.log("Response data:", response.data); // Check the structure of the response data
    const hotelsData = response.data.data.data; // Assuming the array of hotels is under the 'hotels' updater, and it is nested in th array far enough this is needed.
    setHotels(hotelsData); // Set the hotels state to the array of hotels
  } catch (error) {
    console.log("Error in fetching hotels", error);
    console.log("Hotels before rendering", hotels);        
        }
    }

     useEffect(() => {
       fetchHotels();
     }, [location.lat, location.lng, fromDate, toDate]);//!including these values as dependencies, the effect will be re-run whenever any of them change. 
     //!This ensures that the hotels are fetched again with the updated values whenever the user selects a new date or enters a new address.
     //!Without specifying the dependencies, the effect would only run once when the 
     //!component mounts and would not respond to changes in latitude, longitude, fromDate, or toDate.
     
     const handleFormSubmit = (event) => {
      event.preventDefault();
      gethotelLocation(address);
      fetchHotels();
    };
    const handleFromDateChange = (event) => {
      setFromDate(event.target.value);
    };
    const handleToDateChange = (event) => {
      setToDate(event.target.value);
    };
    // const handleLatitudeChange = (event) => {
    //   setLatitude(event.target.value);
    // }
    // const handleLongitudeChange = (event) => {
    //   setLongitude(event.target.value);
      
    // }

    const handleAddressChange = (event) => {
      setAddress(event.target.value);
    };





    return ( <div>
    <div>
    </div>

    <form onSubmit={(e) => handleFormSubmit(e)}>
    <input type="date" value ={fromDate} placeholder="Select a date" onChange={handleFromDateChange}/>
    <input type="date" value ={toDate} placeholder="Select a date" onChange={handleToDateChange}/>
    
      <input type="text" value ={address} placeholder ="Enter City" onChange={handleAddressChange}/>
    
      <button type="submit">Search Hotels</button>
    </form>


			
      <div>
      <h1>Hotel List</h1>
      {/* Conditional rendering check {hotels.length > 0 ? ( hotels.map((hotel)}. 
      My page was rendering faster than my api was able to be mapped over.
      in the future if you run into an api giving the error Map is not a function run a conditional render check. */}
      {hotels.length > 0 ? (
        hotels.map((hotel) => (
          <div key={hotel.id}>
            <h2>{hotel.title}</h2>
                {hotel.provider}<br/>
            City: {hotel.secondaryInfo}
            <p>{hotel.priceForDisplay}</p>
            

          </div>
        ))
      ) : (
        <p>Loading hotels...</p>
      )}
    </div>
    </div>
  );
}

//TODO: I need to go back and make the geocode API work by itself before I incorp it intoo my hotels API
 
export default HotelList; 













