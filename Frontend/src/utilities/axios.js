import { useUserStore } from "../store/Store";
import axios from "axios";

// Instancia de Axios sin withCredentials
export const axiosUser = axios.create({
  baseURL: "http://localhost:3001",
});

// Instancia de Axios con withCredentials
export const axiosAdmin = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
});

axiosAdmin.interceptors.request.use((config) => {
  const token = useUserStore.getState().userToken;
  config.headers = {
    Authorization: `Bearer ${token}`,
  };

  return config;
});
