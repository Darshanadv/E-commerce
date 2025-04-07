import React, { useEffect, useState } from "react";
import useEcomStore from "../../store/useEcomStore";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Category = () => {
  const {
    fetchproductData,
    productData,
    currentUserData,
    watchlist,
    removeFromWatchlist,
    addToWatchlist,
  } = useEcomStore();
  const [categoryTitle, setCategoryTitle] = useState();
  const [matchCategoryList, setMatchCategoryList] = useState();
  const [activeTab, setActiveTab] = useState("men's clothing");
  const navigate = useNavigate();

  useEffect(() => {
    fetchproductData();
  }, []);


    //order timing functionality start.. //
  
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
  
    //order timing functionality End.. //

  useEffect(() => {
    if (productData?.length > 0) {
      const title = [...new Set(productData.map((obj) => obj?.category))];
      setCategoryTitle(title);
      const defaultCategory = productData?.filter(
        (obj) => obj?.category === "men's clothing"
      );
      setMatchCategoryList(defaultCategory);
    }
  }, [productData]);

  const handleOnActiveTab = (data) => {
    const newData = productData?.filter((obj) => obj?.category === data);
    setActiveTab(data);
    setMatchCategoryList(newData);
  };

  const matchedUsers = watchlist.filter(
    (item) => currentUserData?.id === item.userId
  );

  // const loggedinUserId =()=> data.some((i) => i.email === loggedinUserEmail)

  const isInWatchlist = (id) => matchedUsers.some((item) => item.id === id);

  const toggleWatchlist = (res) => {
    
    if (isInWatchlist(res.id)) {
      removeFromWatchlist(res.id);
    } else {
      let userId = currentUserData?.id;
      // let orderingtime = new Date();
      addToWatchlist(res, userId, orderingtime);
    }
  };
  return (
    <>
      {" "}
      <Header />{" "}
      <div className="flex  justify-center  flex-col h-full">
        <div className="flex gap-5 p-5 w-full  bg-blue-500 justify-center">
          {categoryTitle?.map((obj) => (
            <div
              className={`${
                activeTab === obj ? "bg-white" : "bg-blue-400 text-white"
              }  px-5 py-3 w-1/4 rounded cursor-pointer 
       `}
              onClick={() => handleOnActiveTab(obj)}
            >
              {obj}
            </div>
          ))}
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5">
          {matchCategoryList?.map((res) => (
            <div
              key={res.id}
              className="border border-1 border-gray-200 rounded-md hover:border-purple-600 transition-colors bg-white"
            >
              <a
                href="./../src/product.html"
                className="block overflow-hidden"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/products");
                  localStorage.setItem("Clicked Item", res.id);
                }}
              >
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
                {/* <button
                  className={`w-10 h-10 rounded-full border border-1  flex items-center justify-center ${
                    isInWatchlist(res.id)
                      ? "bg-purple-600 text-white"
                      : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                  } transition-colors`}
                  onClick={() => toggleWatchlist(res)}
                >
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
                </button> */}
                {/* <button className="btn-primary">Add to Cart</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
