import React, { useEffect, useState } from "react";
import Header from "./Header";
import useEcomStore from "../../store/useEcomStore";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    watchlist,
    loadWatchlist,
    removeFromWatchlist,
    allCartItemOrderTime,
    addToMyOrder,
    removeAllFromWashList,
    currentUserData,
  } = useEcomStore();
  const navigate = useNavigate();

  //order timing functionality : start //

  const [currentTime, setCurrentTime] = useState();
  const [currentMonth, setCurrentMonth] = useState();
  const [currentDate, setCurrentDate] = useState();

  function update() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentDay = new Date();
    const currentMonthInNumber = currentDay.getMonth();

    const currentHour = String(currentDay.getHours()).padStart(2, "0"); // Ensures 2-digit format
    const currentMinute = String(currentDay.getMinutes()).padStart(2, "0");

    const currentTimefetched = `${currentHour}:${currentMinute}`;
    const currentMonthfetched = months[currentMonthInNumber];
    const currentDatefetched = currentDay.getDate();

    setCurrentTime(currentTimefetched);
    setCurrentMonth(currentMonthfetched);
    setCurrentDate(currentDatefetched);
  }

  const displayTime =
    currentMonth + " " + currentDate + "," + " " + currentTime;
  const orderingtime = displayTime;

  useEffect(() => {
    update();
  }, []);

  setInterval(() => {
    update();
  }, 100);

  //order timing functionality : End //

  const loggedinEmail = localStorage.getItem("Email");
  const [cartsData, setCartsData] = useState();
  const [loggedinPersonDetail, setLoggedinPersonDetail] = useState([]);

  useEffect(() => {
    const matchedUsers = watchlist.filter(
      (item) => loggedinEmail === item.userId
    );

    setLoggedinPersonDetail(matchedUsers);
  }, [watchlist, loggedinEmail]);

  const handleOnAddOrder = () => {
    // first sum of all price then multiple with qty
    const filterData = cartsData?.reduce(
      (sum, item) => sum + (item?.price || 0) * (Number(item?.quantity) || 0),
      0
    );

    // after sum, a new object created to sent to my order page for view
    const newData = {
      userId: currentUserData?.id,
      totalPrice: filterData,
      todayData: orderingtime,
    };

    if (filterData !== null && filterData !== undefined && filterData !== 0) {
      addToMyOrder(newData);
    } else {
      preventDefault();
    }

    //naviagte to order
    navigate("/orders");
    let userID = currentUserData?.id;
    removeAllFromWashList(userID); // remove all data from cart after navigate
  };

  useEffect(() => {
    if (watchlist?.length > 0) {
      const updatedData = watchlist?.filter(
        (obj) => obj?.userId === currentUserData?.id
      );
      setCartsData(updatedData);
    }
  }, [currentUserData, watchlist]);

  useEffect(() => {
    loadWatchlist();
  }, []);

  const removeFromCart = (id) => {
    const filterdCart = cartsData?.filter((obj) => obj?.id !== id);
    setCartsData(filterdCart);
    removeFromWatchlist(id);
  };
  return (
    <>
      <Header />

      <main className="p-5">
        <div className="container lg:w-2/3 xl:w-2/3 mx-auto">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold mb-6">Your Cart Items</h1>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleOnAddOrder}
            >
              Add to Your Order
            </button>
          </div>

          {cartsData?.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow">
              {/* Product Items */}
              <div>
                {/* Product Item */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <img src={item?.image} className="w-36" alt="" />
                  <div className="flex flex-col justify-between">
                    <div className="flex justify-between mb-3">
                      {<h3>{item.description}</h3>}
                      <span className="text-lg font-semibold">
                        {" "}
                        £{(item.price * (item.quantity || 1)).toFixed(2)}{" "}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        Qty:{item.quantity ? item.quantity : 1}
                        {/* <select
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
                        </select> */}
                      </div>
                      <a
                        href="#"
                        className="text-purple-600 hover:text-purple-500"
                        onClick={() => removeFromCart(item?.id)}
                      >
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
  );
};

export default Cart;
