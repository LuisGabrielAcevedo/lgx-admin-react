import { RouteProps } from "react-router-dom";

export interface IRoute extends RouteProps {}
export interface IDrawerItem {
  icon: string;
  name: string;
  path?: string;
  children?: IDrawerItem[];
}

export interface IHttpResponsePagination {
  page?: number;
  pages?: number;
  limit?: number;
  total?: number;
}

export interface IHttpResponse {
  status: number;
  code: string;
  message: string;
  pagination?: IHttpResponsePagination;
}

export interface IObjectHttpResponse<T> extends IHttpResponse {
  data: T;
}
export interface IArrayHttpResponse<T> extends IHttpResponse {
  data: Array<T>;
}

export interface IHttpResponseError extends IHttpResponse {
  errors?: any;
}
