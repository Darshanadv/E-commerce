import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

  const[myAccount, setMyAccount] = useState(false);

  const dropdownMyaccount=()=>{
    if(myAccount==false){
      setMyAccount(true)
    }else if(myAccount==true){
      setMyAccount(false)
    }
  }


  return (
    // <link rel="stylesheet" href="./images/logo.png" />
    <>
      <header className="flex justify-between bg-slate-800 shadow-md text-white items-center">
        <div>
          <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cleanpng.com%2Fpng-e-commerce-logo-electronic-business-2257218%2F&psig=AOvVaw0VQcpogFdaZu6axQNBjOxQ&ust=1742398024522000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCID36cz4k4wDFQAAAAAdAAAAABAE" className="block py-navbar-item pl-5 w-[3cm] ">
            {/* {" "}logo */}
            <img src="./images/logo.png" alt="" />
            {" "}
          </a>
        </div>
        <nav className="hidden md:block ">
          <ul className="grid grid-flow-col gap-5">
            <li>
              <a
                href="/src/index.html"
                className="block py-navbar-item px-navbar-item hover:bg-slate-900"
                onClick={(e) => {
                  e.preventDefault(); 
                  navigate("/landing"); 
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-navbar-item px-navbar-item hover:bg-slate-900"
                onClick={(e) => {
                  e.preventDefault(); 
                  navigate("/landing"); 
                }}
              >
                Categories
              </a>
            </li>
          </ul>
        </nav>
        <nav className="hidden md:block">
          <ul className="grid grid-flow-col items-center gap-10">
            <li>
              <a
                href="/src/cart.html"
                className="inline-flex items-center py-navbar-item px-navbar-item hover:bg-slate-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Cart
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                onClick={dropdownMyaccount}
                className="flex items-center py-navbar-item px-navbar-item pr-5 hover:bg-slate-900"
              >
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  My Account
                </span>
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
             
              {myAccount && (
                 <ul className="absolute z-10 right-0 bg-slate-800 py-2 w-48">
                 <li>
                   <a
                     href="/profile"
                     className="flex px-3 py-2 hover:bg-slate-900"
                     onClick={(e) => {
                       e.preventDefault(); 
                       navigate("/profile"); 
                     }}
                   >
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="h-5 w-5 mr-2"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                       strokeWidth={2}
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                       />
                     </svg>
                     My Profile
                   </a>
                 </li>
                 <li>
                   <a
                     href="/watchlist"
                     className="flex items-center px-3 py-2 hover:bg-slate-900"
                     onClick={(e) => {
                       e.preventDefault(); 
                       navigate("/watchlist"); 
                     }}
                   >
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="h-5 w-5 mr-2"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                       strokeWidth={2}
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                       />
                     </svg>
                     Watchlist
                   </a>
                 </li>
                 <li>
                   <a
                     href="/orders"
                     className="flex px-3 py-2 hover:bg-slate-900"
                     onClick={(e) => {
                       e.preventDefault(); 
                       navigate("/orders"); 
                     }}
                   >
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="h-5 w-5 mr-2"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                       strokeWidth={2}
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                       />
                     </svg>
                     My Orders
                   </a>
                 </li>
                 <li>
                   <a
                     href="/src/logout.html"
                     className="flex px-3 py-2 hover:bg-slate-900"
                     onClick={(e) => {
                       e.preventDefault(); 
                       localStorage.clear();
                       navigate("/"); 
                     }}
                   >
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="h-5 w-5 mr-2"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                       strokeWidth={2}
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                       />
                     </svg>
                     Logout
                   </a>
                 </li>
               </ul>
              )
              
              
              }
            </li>
           
          </ul>
        </nav>
        <button className="p-4 block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>
    </>
  );
};

export default Header;
