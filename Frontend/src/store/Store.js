import { create } from "zustand";
import { axiosAdmin, axiosUser } from "../utilities/axios";
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
        fetchDeleteProduct: async (productId) => {
          try {
            // Realizar la solicitud para eliminar el producto con el productId proporcionado
            await axiosAdmin.delete(`/products/${productId}`);
            // Actualizar el estado de products eliminando el producto con el productId proporcionado
            set((state) => ({
              products: state.products.filter(
                (product) => product.id !== productId
              ),
            }));
          } catch (error) {
            console.error("Error al eliminar el producto:", error);
          }
        },
        fetchUpdateProduct: async (productId, updatedProductData) => {
          try {
            await axiosUser.put(`/products/${productId}`, updatedProductData);
            // Lógica para actualizar la lista de productos después de actualizar
            set((state) => ({
              products: state.products.map((product) =>
                product.id === productId
                  ? { ...product, ...updatedProductData }
                  : product
              ),
            }));
          } catch (error) {
            console.error("Error al actualizar el producto:", error);
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
