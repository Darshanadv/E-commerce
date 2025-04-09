import { create } from "zustand";
import axios from "axios";

const useEcomStore = create((set) => ({
  data: [],
  loading: false,
  error: null,

  productData: [],
  watchlist: [],

  //to handle seperate for order
  myOrder: [],
  currentUserData: {},

  fetchData: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get("https://fakestoreapi.com/users");
      set({ data: response.data, loading: false });
      return response.data;
    } catch (error) {
      set({ error: error.message, loading: false });
      return null;
    }
  },

  fetchproductData: async () => {
    set({ loading: true, error: null });

    try {
      const productResponse = await axios.get(
        "https://fakestoreapi.com/products"
      );
      set({ productData: productResponse.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  addToWatchlist: (
    products,
    userId,
    orderingtime,
    quantity,
    allCartItemOrderTime
  ) =>
    set((state) => {
      const updatedWatchlist = [
        ...state.watchlist,
        {
          ...products,
          userId,
          orderingtime,
          quantity,
          allCartItemOrderTime,
        },
      ];

      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      return { watchlist: updatedWatchlist };
    }),

  loadWatchlist: () => {
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const storeCurrentUserData =
      JSON.parse(localStorage.getItem("currentUserData")) || [];
    const getMyOrder = JSON.parse(localStorage.getItem("myOrder")) || [];
    set({
      watchlist: storedWatchlist,
      currentUserData: storeCurrentUserData,
      myOrder: getMyOrder,
    });
  },

  removeFromWatchlist: (id) =>
    set((state) => {
      const updatedWatchlist = state.watchlist.filter((item) => item.id !== id);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      return { watchlist: updatedWatchlist };
    }),

  // to add data in my order page
  addToMyOrder: (newData) =>
    set((state) => {
      const updatedOrder = [...state.myOrder, newData];
      localStorage.setItem("myOrder", JSON.stringify(updatedOrder));
      return { myOrder: updatedOrder };
    }),

  // to remove all from cart after sending to my order
  removeAllFromWashList: (id) =>
    set((state) => {
      const updatedWatchlist = state?.watchlist?.filter(
        (item) => item.userId !== id
      );
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      return { watchlist: [] };
    }),

  getCurrentUserData: (data) =>
    set((state) => {
      localStorage.setItem("currentUserData", JSON.stringify(data));
      return { currentUserData: data };
    }),
}));

export default useEcomStore;
