import { create } from "zustand";
import axios from "axios";

export const useProductStore = create((set) => {
  return {
    products: [],
    brands: [],
    fetchProductsAndBrands: async () => {
      try {
        const [productsResponse, brandsResponse] = await Promise.all([
          axios.get("http://localhost:3001/products"),
          axios.get("http://localhost:3001/brands"),
        ]);
        const productsData = productsResponse.data.allProducts;
        const brandsData = brandsResponse.data.allBrands;
        set({ products: productsData, brands: brandsData });
      } catch (error) {
        console.error("Error al obtener productos y marcas:", error);
      }
    },
  };
});

export const useUserStore = create((set) => {
  return {
    users: [],
  };
});
