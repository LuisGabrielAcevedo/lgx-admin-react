import axios from "axios";
import { API_URL } from "../constants";

const AxiosInstance = axios.create({ baseURL: API_URL, timeout: 6000 });

AxiosInstance.interceptors.request.use(
  (request) => request,
  (error) => Promise.reject(error)
);

AxiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default AxiosInstance;
