// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import GooglePage from "./pages/GoogleMapPage/GooglePage";
import ListPage from "./pages/ListPage/ListPage";
import LandingPage from "./pages/LandingPage/LandingPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import RandomDestination from "./pages/RandomDestinationPage/RandomDestinationPage";
import HotelList from "./components/TripAdvisorPage/HotelList";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path ="/" element ={<LandingPage />}/>   */}
        {/* This page is the page that you will land on when the app is loaded */}
        <Route path="/" element={ <PrivateRoute><HomePage /></PrivateRoute>}/>
        <Route path="/randomdestinationpage" element={ <PrivateRoute><RandomDestination /></PrivateRoute>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/RandomDestinationPage/GooglePage" element={<PrivateRoute><GooglePage /></PrivateRoute>}/>
        <Route path="/RandomDestinationPage/googlepage/ListPage" element={<PrivateRoute><ListPage /></PrivateRoute>} />
        <Route path="/hotelpage" element={<PrivateRoute><HotelList /></PrivateRoute>} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
