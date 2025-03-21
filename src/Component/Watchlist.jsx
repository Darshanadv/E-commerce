import React from 'react'
import Header from './Header'
import useEcomStore from "../../store/useEcomStore";
import { useEffect, useState } from "react";

const Watchlist = () => {

  const {loadWatchlist, watchlist} = useEcomStore();

  useEffect(()=>{
    loadWatchlist()
  },[])
  

  return (
    <>
    <Header />

    <main className="p-5">
  <div className="container lg:w-2/3 xl:w-2/3 mx-auto">
    <h1 className="text-3xl font-bold mb-6">Your Watchlist</h1>
    {/* Product Items */}
    <div className="bg-white p-4 rounded-lg shadow">

      {/* Product Item */}

      {watchlist.map((item)=>(
        
        <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 justify-between"      >
          <div>
            <img src={item.image} className="w-36" alt="" />                   {/* image fetched..*/} 
          </div>
        <div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col justify-between mb-10">
            <h3>
              {item.title}                                                {/* title fetched..*/} 
            </h3>
            <span className="text-lg font-semibold"> {item.price} </span> {/* price fetched..*/} 
          </div>
          <div className="flex justify-start items-center">
            <a href="#" className="text-purple-600 hover:text-purple-500">
              Remove
            </a>
          </div>
        </div>
        </div>
         
        
      </div>
      ))}
      
      {/*/ Product Item */}
      
    </div>
    {/*/ Product Items */}
  </div>
</main>

    </>
  )
}

export default Watchlist