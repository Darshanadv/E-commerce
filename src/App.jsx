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
import Category from "./Component/Category";
import Cart from "./Component/Cart";



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
             <Route path= "/category" element={<Category/>}/>
             <Route path= "/cart" element={<Cart/>}/>

         
        </Routes>
      </Router>

    </>
  );
}

export default App;
