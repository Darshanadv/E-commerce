import { create } from "zustand";
import axios from "axios";

const useEcomStore = create((set) => ({
  data: [],
  loading: false,
  error: null,

  productData: [],

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
}));

export default useEcomStore;
