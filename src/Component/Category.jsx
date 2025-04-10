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

  const isInWatchlist = (id) => matchedUsers.some((item) => item.id === id);

  const toggleWatchlist = (res) => {
    if (isInWatchlist(res.id)) {
      removeFromWatchlist(res.id);
    } else {
      let userId = currentUserData?.id;
      addToWatchlist(res, userId);
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
                <h5 className="font-bold">£{res.price}</h5>
              </div>
              <div className="flex justify-between py-3 px-4"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
