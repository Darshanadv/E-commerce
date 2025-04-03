import React, { useEffect, useState } from 'react'
import Header from './Header'
import useEcomStore from '../../store/useEcomStore'

const Orders = () => {

  const[testDate, setTestDate] = useState("test Date")
  const[testTotalPrice, setTestTotalPricec] = useState("test Totalprice")

const {watchlist,loadWatchlist} = useEcomStore();
const loggedinEmail = localStorage.getItem('Email');

const [loggedinPersonDetail, setLoggedinPersonDetail] = useState([])
// console.log(loggedinPersonDetail);

// console.log(watchlist);

useEffect(()=>{
        loadWatchlist()
    }, [])

    useEffect(() => {
            const matchedUsers = watchlist.filter((item) => loggedinEmail === item.userId);
            console.log(matchedUsers);
            
            setLoggedinPersonDetail(matchedUsers); 
          }, [watchlist, loggedinEmail]);
     
  return (
    <>
    <Header />

  <main className="p-5">
    <div className="container lg:w-2/3 xl:w-2/3 mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      <div className="bg-white p-3 rounded-md shadow-md">
        <table className="table table-auto w-full">
          <thead className="border-b-2">
            <tr className="text-left">
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th className="w-64">Actions</th>
            </tr>
          </thead>
          {loggedinPersonDetail.map((item,index)=>(
            
           <tbody key={item.id}>
            <tr className="border-b">
              <td>
                <a
                  href="/src/order-details.html"
                  className="text-purple-600 hover:text-purple-500"
                >
                 {index+1}
                </a>
              </td>
              <td>{item.orderingtime}</td>
              <td>
                <span className="bg-gray-500 text-white p-1 rounded">
                  Unpaid
                </span>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td className="flex gap-3">
                <button className="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 py-1 px-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Invoice
                </button>
                <button className="btn-primary py-1 px-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  Pay
                </button>
              </td>
            </tr>

          </tbody>
       
      ))}
         
        </table>



        
      </div>
    </div>


{/* test table start */}

    <table className="table table-auto w-full">
          <thead className="border-b-2">
            <tr className="text-left">
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th className="w-64">Actions</th>
            </tr>
          </thead>
         
            
           <tbody >
            <tr className="border-b">
              <td>
                <a
                  href="/src/order-details.html"
                  className="text-purple-600 hover:text-purple-500"
                >
                 {1}
                </a>
              </td>
              <td>{testDate}</td>
              <td>
                <span className="bg-gray-500 text-white p-1 rounded">
                  Unpaid
                </span>
              </td>
              <td>${testTotalPrice}</td>
              <td className="flex gap-3">
                <button className="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 py-1 px-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Invoice
                </button>
                <button className="btn-primary py-1 px-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  Pay
                </button>
              </td>
            </tr>

          </tbody>
       
      
         
        </table>


        {/* test table end  */}


  </main>
</>

    
  )
}

export default Orders