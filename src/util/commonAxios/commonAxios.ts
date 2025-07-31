import axios from "axios";

export const commonAxios = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT_PROD,
});
