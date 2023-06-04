import React from "react";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import axios from "axios";


const RandomDestination = (props) => {

const[destination, setDestination] = useState([]);
const[budgetDestinations, setBudgetDestinations]= useState([])
const [user, token] = useAuth();
    
    
    
const [searchInput, setSearchInput] = useState("");

const fetchBudgetDestinations = async (searchInput) => {
  try {
    let response = await axios.get(`http://127.0.0.1:8000/api/destination/budget/${searchInput}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setBudgetDestinations(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
};
  //! uncomment this once you get the google page to work!!
// useEffect(() => {
//   fetchBudgetDestinations(searchInput);
// }, [searchInput,token]);

function handleSearch(event) {
  event.preventDefault();
  fetchBudgetDestinations(searchInput);
}

function handleBudgetChange(event) {
  setSearchInput(event.target.value);
}
  
return (
  <div>
    <select id="budgetydropdown" value={searchInput} onChange={handleBudgetChange}>
      <option value="1">Lower class</option>
      <option value="2">Fair</option>
      <option value="3">Most Expensive</option>
    </select>
    <button type="submit" onClick={handleSearch}>Search Vacations on a budget!</button>
  </div>
);   
    
    
//     useEffect(() => {
//         const fetchBudgetDestinations = async (searchInput) => {
//             try {
//               let response = await axios.get("http://127.0.0.1:8000/api/destination/budget/" + searchInput, {
//                 headers: {
//                   Authorization: "Bearer " + token,
//                 },
//               });
//               setBudgetDestinations(response.data);
//             } catch (error) {
//               console.log(error.response.data);
//             }
//           };
//           fetchBudgetDestinations();
         
        
        
        
        
        
//         const fetchDestinations = async (searchDestInput) => {
//           try {
//             let response = await axios.get("http://127.0.0.1:8000/api/destination/destinations/" + searchDestInput , {
//               headers: {
//                 Authorization: "Bearer " + token,
//               },
//             });
//             setDestination(response.data);
//           } catch (error) {
//             console.log(error.response.data);
//           }
//         };
//         fetchDestinations();
        





//       }, [token]);
//       const [search, setSearch]=("");
//       function handleBudgetChange(event){
//       event.preventDefault();
//       searchDestInput(search)
//       };
//       return(
//         <div>
//         <select onSubmit = {handleBudgetChange} id="budgetydropdown">
//         <option value = {budget.id}>Lower class</option>
//         <option value="tags2">blahblah</option>
//         <option value="tags3">blahblahblah</option>
//         </select>
//         <button type='submit'>Search Songs</button> 
//         </div>







//     //   <table>
//     //     <thead>
//     //         <tr>

//     //             <th> Destination</th>
//     //             <th> Terrain</th>
//     //             <th> State</th>
//     //             <th> City</th>
//     //             <th> Average Summer Tempature</th>
//     //             <th> Average Winter Tempature</th>
//     //             <th> Budget Type</th> 
//     //         </tr>
//     //     </thead>
//     //     <tbody>
//     //         {}
//     //     </tbody>

//     //   </table>
    
    
    
  
//      );
}
 
export default RandomDestination;