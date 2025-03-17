import React from 'react'
import Header from './Header'

const Watchlist = () => {
  return (
    <>
    <Header />

    <main className="p-5">
  <div className="container lg:w-2/3 xl:w-2/3 mx-auto">
    <h1 className="text-3xl font-bold mb-6">Your Watchlist</h1>
    {/* Product Items */}
    <div className="bg-white p-4 rounded-lg shadow">
      {/* Product Item */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <img src="/src/img/1_1.jpg" className="w-36" alt="" />
        <div className="flex flex-col justify-between">
          <div className="flex justify-between mb-3">
            <h3>
              Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
              Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
            </h3>
            <span className="text-lg font-semibold"> $17.99 </span>
          </div>
          <div className="flex justify-end items-center">
            <a href="#" className="text-purple-600 hover:text-purple-500">
              Remove
            </a>
          </div>
        </div>
      </div>
      {/*/ Product Item */}
      <hr className="my-5" />
      {/* Product Item */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <img src="/src/img/1_1.jpg" className="w-36" alt="" />
        <div className="flex flex-col justify-between">
          <div className="flex justify-between mb-3">
            <h3>
              Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
              Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
            </h3>
            <span className="text-lg font-semibold"> $17.99 </span>
          </div>
          <div className="flex justify-end items-center">
            <a href="#" className="text-purple-600 hover:text-purple-500">
              Remove
            </a>
          </div>
        </div>
      </div>
      {/*/ Product Item */}
      <hr className="my-5" />
      {/* Product Item */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <img src="/src/img/1_1.jpg" className="w-36" alt="" />
        <div className="flex flex-col justify-between">
          <div className="flex justify-between mb-3">
            <h3>
              Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
              Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
            </h3>
            <span className="text-lg font-semibold"> $17.99 </span>
          </div>
          <div className="flex justify-end items-center">
            <a href="#" className="text-purple-600 hover:text-purple-500">
              Remove
            </a>
          </div>
        </div>
      </div>
      {/*/ Product Item */}
      <hr className="my-5" />
      {/* Product Item */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <img src="/src/img/1_1.jpg" className="w-36" alt="" />
        <div className="flex flex-col justify-between">
          <div className="flex justify-between mb-3">
            <h3>
              Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
              Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
            </h3>
            <span className="text-lg font-semibold"> $17.99 </span>
          </div>
          <div className="flex justify-end items-center">
            <a href="#" className="text-purple-600 hover:text-purple-500">
              Remove
            </a>
          </div>
        </div>
      </div>
      {/*/ Product Item */}
      <hr className="my-5" />
    </div>
    {/*/ Product Items */}
  </div>
</main>

    </>
  )
}

export default Watchlist