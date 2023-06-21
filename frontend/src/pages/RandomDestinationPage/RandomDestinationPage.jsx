import React from "react";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import axios from "axios";
import RandomDestionationForm from "../../components/RandomDestinationForm/RandomDestinationForm";
import "./RandomDestination.css";
import chesapeak from "../../assets/chestertownMD.jpg"
import cove from "../../assets/cove.jpg"


const RandomDestination = (props) => {
  const [budgetDestinations, setBudgetDestinations] = useState([]);
  const [user, token] = useAuth();
  const [searchInput, setSearchInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");

  const fetchBudgetDestinations = async () => {
    try {
      
      let response = await axios.get(
        `http://127.0.0.1:8000/api/destination/budget/${searchInput}/?terrain=${destinationInput}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      
      setBudgetDestinations(response.data);
      console.log(response.data);
      
    } catch (error) {
      console.log(error.response.data);
    }
  };
  // function combineInputs = (e)


  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // setSearchInput(event.target.value);
    fetchBudgetDestinations(searchInput,destinationInput);
  };
  const handleBudgetChange = (event) => {
    setSearchInput(event.target.value);
  };
  const handleDestinationChange = (event) => {
    setDestinationInput(event.target.value);
  };

  return (
    <div className="destpage">
      <div class="px-2 py-2">
      <div class="container">
  <div class="row">
    <div class="col">
      <div className="picture">
      <img src={chesapeak} height={700} width={400} alt="Chesepeakbay"/>
      </div>
    </div>
    <div class="col-4">
      <div className="wordsborder">
      <h1><b>{user.username} </b></h1>
      <h2>Use the drop downs to have a destination selected for you.</h2>
      <hr/>
      <h3>If you do not like the vacation destination provided. <br/> <b> click the button to re-roll</b></h3>
      <div>
      </div>
        Select your options for a vacation
      </div>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <select class="form-select form-select-sm" aria-label=".form-select-sm example"
          id="budgetydropdown"
          value={searchInput}
          onChange={handleBudgetChange}
        >
          <option value="">Select a budget</option>
          <option value="1">$1,500 or less</option>
          <option value="2">$1500.00 to $3,000.00</option>
          <option value="3">$3,000 +</option>
        </select>
      </form>
      <br/>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <select class="form-select form-select-sm" aria-label=".form-select-sm example"
          id="destinationdropdown"
          value={destinationInput}
          onChange={handleDestinationChange}
        >
          <option value="">Select an terrain</option>
          <option value="Island">Island</option>
          <option value="Beach">Beach</option>
          <option value="Desert">Desert</option>
          <option value="Mountain">Mountain</option>
          <option value="City">City</option>
        </select>
        <br/>
        <button type="submit">Search for a vacation</button>
      </form>
    </div>
    <div class="col">
    <div className="picture">
      <img src={cove} height={700} width={400} alt=" RANDOM caynon"/>
      </div>
    </div>
  </div>
  <div class="row">
    <RandomDestionationForm destInput={budgetDestinations}/>
  </div>
  <div class="row">
  <h1>"<b> TAKE ONLY MEMORIES, LEAVE ONLY FOOTPRINTS." - CHIEF SEATTLE</b></h1>
  </div>
</div>
</div>
      
    
      
    </div>
  );

};

export default RandomDestination;
