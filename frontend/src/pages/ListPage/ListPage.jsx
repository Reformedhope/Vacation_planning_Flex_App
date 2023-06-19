import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import AddAitem from "../../components/AddAItem/AddAItem";
import ListGroup from "react-bootstrap/ListGroup";
import './ListPage.css';
import packingphoto from "../../assets/Packingphoto.jpg"
import seasonpic from "../../assets/seasons.jpg"





const ListPage = (props) => {
  const [user, token] = useAuth();
  const [items, setItems] = useState([]);
  
  console.log(user);
  console.log(token);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/vacation/lists/list/",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setItems(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchItems();
  }, [token]);

  return (
    
    
        
    <div className="listbackground">
      <div class="container">
  <div class="row">
    <div class="col">
      <div>
        <ListGroup horizontal>
          <ol style={{ listStyleType: "none" }}>
            <h2>Common items to check off</h2>
            <p>No Item left behind</p>
            <hr/>
            {/* Puting the style type as non takes away the index(number) counter */}
            <ListGroup.Item>
              <li>
                <input type="checkbox" />
                Phone Charger
              </li>
            </ListGroup.Item>
            <ListGroup.Item>
              <li>
                <input type="checkbox" />
                Pillow/Pillow
              </li>
            </ListGroup.Item>
            <ListGroup.Item>
              <li>
                <input type="checkbox" />
                Comfy Slippers/socks/house shoes
              </li>
            </ListGroup.Item>
            <ListGroup.Item>
              <li>
                <input type="checkbox" />
                Loofa/Washcloth
              </li>
            </ListGroup.Item>
            <ListGroup.Item>
              <li>
                <input type="checkbox" />
                Battery Block
              </li>
            </ListGroup.Item>
            <ListGroup.Item>
              <li>
                <input type="checkbox" />
                Snacks for travel
              </li>
            </ListGroup.Item>
            <ListGroup.Item>
              <li>
                <input type="checkbox" />
                Clorox wipes
              </li>
            </ListGroup.Item>
            <ListGroup.Item>
              <li>
                <input type="checkbox" />
                Medicine
              </li>
            </ListGroup.Item>
            <ListGroup.Item>
              <li>
                <input type="checkbox" />
                Head phones
              </li>
            </ListGroup.Item>
            <ListGroup.Item>
              <li>
                <input type="checkbox" />
                Portible Fan
              </li>
            </ListGroup.Item>
          </ol>
        </ListGroup>
        </div>
    </div>
    <div class="col">
      <h2>{user.username}'s</h2>
        <h1>Packing Lists</h1>
        <hr/>
    <img src={packingphoto} class="rounded" alt="packing items"/>
    </div>
    <div class="col">
      <div>
        <h2> Create your own list!</h2>
        <AddAitem fetchItems={items} />
        <ol style={{ listStyleType: "none" }}>
          {items &&
            items.map((item) => (
              <li key={item.id}>
                <input type="checkbox" />
                {item.items} {item.items_needed}
              </li>
            ))}
        </ol>
      </div>
    </div>
  </div>
  <div class="row">
   <p> "When Preparing to travel lay out all your cloths and all your money.<br/>
    Than take half the clothes and twice the money." - Susan Helier</p>
    <img src={seasonpic} alt="seasons" height={400} width={9}/>
 

  </div>
</div>

      
     
      

         
      
      
     
       


    </div>
    
   
  );
};

export default ListPage;
