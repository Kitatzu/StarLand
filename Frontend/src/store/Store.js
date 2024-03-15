import { create } from "zustand";
import { axiosUser } from "../utilities/axios";
import { persist } from "zustand/middleware";

export const useProductStore = create(
  persist(
    (set) => {
      return {
        products: [],
        brands: [],
        fetchProductsAndBrands: async () => {
          try {
            const [productsResponse, brandsResponse] = await Promise.all([
              axiosUser.get("/products"),
              axiosUser.get("/brands"),
            ]);
            const productsData = productsResponse.data.allProducts;
            const brandsData = brandsResponse.data.allBrands;
            set({ products: productsData, brands: brandsData });
          } catch (error) {
            console.error("Error al obtener productos y marcas:", error);
          }
        },
      };
    },
    { name: "products" }
  )
);

export const useUserStore = create(
  persist(
    (set) => {
      return {
        userToken: "",
        isLogin: false,
        setToken: (token) =>
          set((state) => ({
            userToken: token,
            isLogin: true,
          })),
      };
    },
    { name: "authToken" }
  )
);
