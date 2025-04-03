import React, { useEffect, useState } from 'react'
import Header from './Header'
import useEcomStore from '../../store/useEcomStore'

const Cart = () => {

    const{watchlist, loadWatchlist, removeFromWatchlist} = useEcomStore()

      const loggedinEmail = localStorage.getItem('Email');
      
    const [loggedinPersonDetail, setLoggedinPersonDetail] = useState([])
    console.log(loggedinPersonDetail);

    console.log(watchlist);
    

    useEffect(()=>{
        loadWatchlist()
    }, [])

      useEffect(() => {
        const matchedUsers = watchlist.filter((item) => loggedinEmail === item.userId);
        
        setLoggedinPersonDetail(matchedUsers); 
      }, [watchlist, loggedinEmail]);


  return (
    <>

 <Header />

  <main className="p-5">
    <div className="container lg:w-2/3 xl:w-2/3 mx-auto">
    <div className='flex justify-between'>
    <h1 className="text-3xl font-bold mb-6">Your Cart Items</h1>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
           Add to Your Order
        </button>
    </div>
      

      {loggedinPersonDetail.map((item)=>(


    <div key={item.id} className="bg-white p-4 rounded-lg shadow">
    {/* Product Items */}
    <div>
      {/* Product Item */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <img src="/src/img/1_1.jpg" className="w-36" alt="" />
        <div className="flex flex-col justify-between">
          <div className="flex justify-between mb-3">
           {<h3>{item.description}</h3>}
            <span className="text-lg font-semibold"> ${(item.price * (item.quantity || 1)).toFixed(2)} </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              Qty:
              <select
                name=""
                id=""
                className="ml-3 py-1 border-gray-200 focus:border-purple-600 focus:ring-purple-600"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
              </select>
            </div>
            <a href="#" className="text-purple-600 hover:text-purple-500"
            onClick={()=>removeFromWatchlist(item.id)}>
              Remove
            </a>
          </div>
        </div>
      </div>
      {/*/ Product Item */}
      <hr className="my-5" />
      </div>
  </div>
 ))}
    </div>
  </main>

  
</>


  )
}

export default Cart