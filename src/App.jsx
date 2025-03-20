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
          
            <Route path= "/" element={<Login />}/>
            <Route path= "/landing" element={<Landing />}/>
            <Route path= "/signup" element={<Signup />}/>
            <Route path= "/watchlist" element={<Watchlist />}/>
             <Route path= "/products" element={<Products />}/>
             <Route path= "/profile" element={<Profile />}/>
             <Route path= "/ordersdetail" element={<Ordersdetail />}/>
             <Route path= "/orders" element={<Orders />}/>

         
        </Routes>
      </Router>

    </>
  );
}

export default App;
