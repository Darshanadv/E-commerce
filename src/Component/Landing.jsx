import React, { useEffect, useState } from "react";
import useEcomStore from "../../store/useEcomStore";
import Header from "./Header"
import {useNavigate } from "react-router-dom";


const Landing = () => {
  const { productData,fetchproductData,addToWatchlist,loadWatchlist, watchlist } = useEcomStore();
  const navigate = useNavigate()

  // const[likedProductButton, setLikedProductButton] = useState(false);
  const[clickedItemId, setclickedItemId] = useState("");

  const userId = "user1"

// console.log(watchlist[3]);       //.........................................


  useEffect(() => {
    fetchproductData();
  }, []);

  useEffect(()=>{
    loadWatchlist();
  },[])

  

  return (
    <div>
        <Header />
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5">

        {productData.map((res) => (
          <div
            key={res.id}

            className="border border-1 border-gray-200 rounded-md hover:border-purple-600 transition-colors bg-white"
          >
            <a href="./../src/product.html" className="block overflow-hidden"
            onClick={(e) => {
              e.preventDefault(); 
              navigate("/products");
              // console.log(res.id);
              setclickedItemId(res.id);
              localStorage.setItem("Clicked Item",res.id);
              
            }}>
            
              <img
                src={res.image}
                alt=""
                className="rounded-lg hover:scale-105 hover:rotate-1 transition-transform h-52 m-auto py-8"
              />
            </a>
            <div className="p-4">
              <h3 className="text-lg min-h-20">
                <a href="./../src/product.html">
                  {res.title || "no description"}
                </a>
              </h3>
              <h5 className="font-bold">{res.price}</h5>
            </div>
            <div className="flex justify-between py-3 px-4">
              <button className="w-10 h-10 rounded-full border border-1 border-purple-600 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-800 transition-colors " onClick={()=>addToWatchlist(res, userId)}  >

              {/* <button  className={`w-10 h-10 rounded-full border border-1 border-purple-600 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-whitetransition-colors " onClick={()=>{addToWatchlist(res, userId); setLikedProductButton(true)}} ${likedProductButton ? "bg-green-500" : "bg-blue-500"
                                         }`} > */}

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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button className="btn-primary">Add to Cart</button>
            </div>
          </div>
        ))}

        {/* / Product Item */}

       
      </div>
    </div>
  );
};

export default Landing;
