import { Method, AxiosRequestConfig } from "axios";
import AxiosInstance from "./axios.service";

const METHODS: Method[] = ["get", "put", "post", "patch", "delete"];

export const setAccessToken = (accessToken: string): void => {
  AxiosInstance.defaults.headers.common.Authorization = accessToken
    ? `${accessToken}`
    : "";
  return;
};

const httpMethods = METHODS.map(
  (method) => (
    url: string,
    requestConfig: AxiosRequestConfig = {}
  ): Promise<any> =>
    AxiosInstance.request({
      url,
      method,
      ...requestConfig,
    })
);

export const [get, put, post, patch, del] = httpMethods;
