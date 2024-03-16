import { useUserStore } from "../store/Store";
import axios from "axios";
const host = import.meta.env.VITE_HOST;

// Instancia de Axios sin withCredentials
export const axiosUser = axios.create({
  baseURL: host,
});

// Instancia de Axios con withCredentials
export const axiosAdmin = axios.create({
  baseURL: host,
  withCredentials: true,
});

axiosAdmin.interceptors.request.use((config) => {
  const token = useUserStore.getState().userToken;
  config.headers = {
    Authorization: `Bearer ${token}`,
  };

  return config;
});
