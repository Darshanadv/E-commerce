import { create } from "zustand";
import axios from "axios";

const useEcomStore = create((set) => ({
  data: [],
  loading: false,
  error: null,

  productData: [],
  watchlist: [],
 

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

  addToWatchlist: (products, userId, orderingtime, quantity, abc, allCartItemOrderTime)=>set((state)=>{
    const updatedWatchlist = [...state.watchlist, {...products, userId, orderingtime, quantity, abc, allCartItemOrderTime}]
    
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist))
    return {watchlist: updatedWatchlist}
  }),

  loadWatchlist: ()=>{
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || []
    set({watchlist: storedWatchlist})
  },

  removeFromWatchlist: (id) => set((state)=>{
    const updatedWatchlist = state.watchlist.filter((item)=>item.id !== id)
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist))
    return {watchlist: updatedWatchlist}
  })



}));

export default useEcomStore;
