import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import AddAitem from "../../components/AddAItem/AddAItem";
import ListGroup from 'react-bootstrap/ListGroup';


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
    <div>
      <h2>{user.username}</h2>
              <h1>Packing List</h1>
      <AddAitem fetchItems={items} />

      <ol style={{listStyleType: "none"}}>
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <input type="checkbox" />
              {item.items} {item.items_needed}
            </li>
          ))}
      </ol>
      <div>
      
      <ListGroup as="ol">
        <ol style={{listStyleType:"none"}}>
          {/* Puting the style type as non takes away the index(number) counter */}
      <ListGroup.Item as="li" active>
        <li><input type="checkbox"/>Phone Charger</li>
        </ListGroup.Item>
      
      <li><input type="checkbox"/>Pillow/Pillow</li>
      <li><input type="checkbox"/>Comfy Slippers/socks/house shoes</li>
      <li><input type="checkbox"/>Loofa/Washcloth</li>
      <li><input type="checkbox"/>Battery Block</li>
      <li><input type="checkbox"/>Snacks for travel</li>
      <li><input type="checkbox"/>Clorox wipes</li>
      <li><input type="checkbox"/>Medicine</li>
      <li><input type="checkbox"/>Head phones</li>
      <li><input type="checkbox"/>Portible Fan</li>
      </ol>
      </ListGroup>
      </div>
      


    </div>
  );
};



export default ListPage;
