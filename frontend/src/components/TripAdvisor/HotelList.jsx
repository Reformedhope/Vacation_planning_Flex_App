import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const HotelList = () => {
    const[hotels, setHotels]=useState([]);
    const [user, token] = useAuth();
    // const[toSearch, setToSearch] =useState([])
    // const[fromSearch, setFromSearch] =useState([]) 
        
        useEffect(() => {
            fetchHotels();
        }, []);
    
        // debugger
        async function fetchHotels() {
        try {
            let response = await axios.get('https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation?latitude=40.730610&longitude=-73.935242&checkIn=2023-06-15&checkOut=2023-06-20&pageNumber=1&currencyCode=USD',
            
            {
                headers: {
                    'X-RapidAPI-Key':  '3209788d98msh7972559b7c7ebe3p199943jsn5a92dd09c0e7',
                    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',

                },
              });
                console.log('value of response.data before setting the state:',response.data);
            setHotels(response.data);
        }catch(error){
            console.log("This is the error",error)
            console.log("Value of hotels before rendering", hotels);
            console.log("let check the type of hotel data" , typeof hotels);
            
        }
    }

    console.log("Render function called");
    return ( 
        <div>


        <h1>Hotel List</h1>
        {/* <input
              type="date"
              placeholder="Select your from date"
              value={fromSearch}
              onChange={(event) => setFromSearch(event.target.value)}
            />
            <input
              type="text"
              placeholder="Select your to date"
              value={toSearch}
              onChange={(event) => setToDate(event.target.value)}
            /> */}
        
        {hotels.map((hotel) => (
          <div key={hotel.id}>
            <h2>{hotel.data.title}</h2>
            <p>{hotel.data.secondaryInfo}</p>
            <p>{hotel.data.priceForDisplay}</p>
          </div>
        ))}
      </div>
  
     );
}
 
export default HotelList;