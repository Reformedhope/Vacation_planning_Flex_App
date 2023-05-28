// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import GooglePage from "./pages/GoogleMapPage/GooglePage";
import ListPage from "./pages/ListPage/ListPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <PrivateRoute><HomePage /></PrivateRoute>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/GooglePage" element={<GooglePage/>}/>
        <Route path="listpage" element={<PrivateRoute><ListPage /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
