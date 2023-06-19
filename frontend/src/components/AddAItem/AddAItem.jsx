import React from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";



const AddAitem = (props) => {
     const[user, token]= useAuth();
     const[item, setItem]= useState([]);
     const[itemsNeeeded, setItemsNeeded] =useState(0);
    
    
    
    
    function handleSubmit(event){    
        // event.preventDefault();
        let newItem = {
            items: item,
            items_needed:itemsNeeeded,
        };
        createAItem(newItem)
    }

    async function createAItem(newItem){
        try{
        let response = await axios.post ('http://127.0.0.1:8000/api/vacation/lists/list/',newItem, {
            headers:{
                Authorization:'Bearer ' + token
              }

        })
    }catch(error){
        console.log(error.message)
    }

    }
    
    
    
    return (
    
        
        <div>
            <div class="container">
  <div class="row">
    <div class="col">
        <hr/>
      <form onSubmit={handleSubmit}>
            <input type='text' value={item} placeholder= " Enter Item Name" onChange={(event) => setItem(event.target.value)}/>
            <br/>
            <br/>
            <input type='number' value={itemsNeeeded} placeholder= " Enter number of Items" onChange={(event) => setItemsNeeded(event.target.value)}/><br/>
            <br/>
            <button type='submit'>Add Item!</button>
            
        </form>
    </div>
  </div>
</div>
        
        </div>
           












     );
}
 
export default AddAitem;