import axios from "axios";
import { useEffect, useState } from "react";

// import useAuth from "../../hooks/useAuth";

const HotelList = () => {
    const[hotels, setHotels]=useState([]);
    const[toDate, setToDate]=useState('')
    const[fromDate, setFromDate] =useState('')
  
    // const [user, token] = useAuth();
    // const[toSearch, setToSearch] =useState([])
    // const[fromSearch, setFromSearch] =useState([]) 


    //
      
	async function fetchHotels() {
    try {
      let response = await axios.get(`https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation?latitude=40.730610&longitude=-73.935242&checkIn=${fromDate}&checkOut=${toDate}&pageNumber=1&currencyCode=USD`,
        {
					headers: {
			      'X-RapidAPI-Key':  '3209788d98msh7972559b7c7ebe3p199943jsn5a92dd09c0e7',
						'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
					},
        }
			);
      console.log("Response data:", response.data); // Check the structure of the response data
    const hotelsData = response.data.data.data; // Assuming the array of hotels is under the 'hotels' key
    setHotels(hotelsData); // Set the hotels state to the array of hotels
  } catch (error) {
    console.log("Error in fetching hotels", error);
    console.log("Hotels before rendering", hotels);        
        }
    }

     useEffect(() => {
       fetchHotels();
     }, []);
     
     const handleFormSubmit = (event) => {
      event.preventDefault();
      fetchHotels();
    };
    const handleFromDateChange = (event) => {
      setFromDate(event.target.value);
    };
    const handleToDateChange = (event) => {
      setToDate(event.target.value);
    };





    return ( <div>
    <div>
    </div>

    <form onSubmit={(e) => handleFormSubmit(e)}>
    <input type="date" value ={fromDate} placeholder="Select a date" onChange={handleFromDateChange}/>
    <input type="date" value ={toDate} placeholder="Select a date" onChange={handleToDateChange}/>
    
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
            <p>{hotel.provider}</p>
            <p>{hotel.secondaryInfo}</p>
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
 
export default HotelList; 













