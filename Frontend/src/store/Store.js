import { create } from "zustand";

export const useProductStore = create((set) => {
  return {
    products: ["hola"],
  };
});

export const useUserStore = create((set) => {
  return {
    users: [],
  };
});

export const useBrandStore = create((set) => {
  return {
    brands: [],
  };
});
