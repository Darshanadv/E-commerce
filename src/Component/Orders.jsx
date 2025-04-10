import React, { useEffect, useState } from "react";
import Header from "./Header";
import useEcomStore from "../../store/useEcomStore";

const Orders = () => {
  const [testDate, setTestDate] = useState("test Date");
  const [testTotalPrice, setTestTotalPricec] = useState("test Totalprice");

  const { watchlist, loadWatchlist, myOrder, currentUserData } = useEcomStore();
  const [myCurrentOrder, setMyCurrentOrder] = useState();
  const loggedinEmail = localStorage.getItem("Email");

  const [loggedinPersonDetail, setLoggedinPersonDetail] = useState([]);

  useEffect(() => {
    const matchedUsers = watchlist.filter(
      (item) => loggedinEmail === item.userId
    );

    setLoggedinPersonDetail(matchedUsers);
  }, [watchlist, loggedinEmail]);

  useEffect(() => {
    loadWatchlist();
  }, []);

  useEffect(() => {
    if (myOrder?.length > 0) {
      const filterOrder = myOrder?.filter(
        (obj) => obj?.userId === currentUserData?.id
      );
      setMyCurrentOrder(filterOrder);
    }
  }, [myOrder, currentUserData]);

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
                  <th>Id</th>
                  <th>Order date</th>
                  <th>Total price</th>
                </tr>
              </thead>
              {myCurrentOrder?.map((item, index) => (
                <tbody key={index}>
                  <tr className="border-b">
                    <td>
                      <a
                        href="/src/order-details.html"
                        className="text-purple-600 hover:text-purple-500"
                      >
                        {index + 1}
                      </a>
                    </td>
                    <td>{item?.todayData}</td>

                    <td>£{item?.totalPrice?.toFixed(2)}</td>
                    <td className="flex gap-3"></td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Orders;
