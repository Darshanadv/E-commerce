import React from "react";
import Header from "./Header";
import useEcomStore from "../../store/useEcomStore";
import { useEffect, useState } from "react";

const Watchlist = () => {
  const { loadWatchlist, watchlist, removeFromWatchlist } = useEcomStore();

  const loggedinEmail = localStorage.getItem("Email");

  const [loggedinPersonDetail, setLoggedinPersonDetail] = useState([]);

  useEffect(() => {
    loadWatchlist();
  }, []);

  useEffect(() => {
    const matchedUsers = watchlist.filter(
      (item) => loggedinEmail === item.userId
    );

    setLoggedinPersonDetail(matchedUsers);
  }, [watchlist, loggedinEmail]);

  return (
    <>
      <Header />

      <main className="p-5">
        <div className="container lg:w-2/3 xl:w-2/3 mx-auto">
          <h1 className="text-3xl font-bold mb-6">Your Watchlist</h1>
          {/* Product Items */}
          <div className="bg-white p-4 rounded-lg shadow">
            {/* Product Item */}

            {loggedinPersonDetail.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <div>
                  <img
                    src={item.image}
                    className="w-36 h-36 object-contain p-5"
                    alt=""
                  />{" "}
                </div>
                <div>
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col justify-between mb-10">
                      <h3>{item.title}</h3>
                      <span className="text-lg font-semibold">
                        {" "}
                        £{item.price}{" "}
                      </span>{" "}
                    </div>
                    <div className="flex justify-start items-center">
                      <button
                        className="text-purple-600 hover:text-purple-500"
                        onClick={() => removeFromWatchlist(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Watchlist;
