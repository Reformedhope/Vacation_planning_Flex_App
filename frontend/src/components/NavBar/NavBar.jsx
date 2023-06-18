import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import Nav from 'react-bootstrap/Nav';


const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          
          <Link to="/" style={{ textDecoration: "none", color: "White" }}>
            <b>Vacation Planning Flex App</b>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
      {/* This is using bootstrap below to style */}
      <div className="d-flex justify-content-center"> 
      <Nav variant="tabs" defaultActiveKey="/home" >
      <Nav.Item>
        <Nav.Link  href="/RandomDestinationPage">Next Vacation Destination</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/RandomDestinationPage/googlepage">Maps and location</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/RandomDestinationPage/googlepage/ListPage">Lists</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/hotelpage">Find a hotel</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
    </div>
  );
};

export default Navbar;
