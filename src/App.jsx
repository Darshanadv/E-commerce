import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import Login from "./Component/Login";
import Landing from "./Component/Landing";
import { useEffect, useState } from "react";
import Ordersdetail from "./Component/Ordersdetail";
import Products from "./Component/Products";
import Profile from "./Component/Profile";
import Signup from "./Component/Signup";
import Watchlist from "./Component/Watchlist";
import Orders from "./Component/Orders";


function App() {
  const [credentialData, setCredentialData] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("Email");
    const storedPassword = localStorage.getItem("Password");

    setCredentialData(!!(storedEmail && storedPassword));
  }, []);

  return (
    <>
      <Router>
        <Routes>
          
            <Route path="/landing" element={credentialData? <Landing /> : <Navigate to="/" /> } />
          
            <Route path="/" element={credentialData? <Navigate to="/landing" /> : <Login/> } />

            <Route path="/orders" element ={credentialData? <Orders/>: <Navigate to="/" />} />
            <Route path="/ordersdetail" element = {credentialData? <Ordersdetail />: <Navigate to= "/"/>}/>
            <Route path="/products" element = {credentialData? <Products/>:<Navigate to="/"/>} />
            <Route path="/profile" element ={credentialData?<Profile/>:<Navigate to="/"/>} />
            <Route path="/signup" element = {credentialData?<Signup/>:<Navigate to="/"/>}/>
            <Route path="/watchlist" element = {credentialData? <Watchlist/> : <Navigate to="/"/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
