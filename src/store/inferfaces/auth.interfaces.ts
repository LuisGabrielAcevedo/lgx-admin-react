import { IObjectHttpResponse, IUser } from "../../interfaces";

export interface IAuthState {
  isLoading: boolean;
  user: IUser | null;
  token: string;
}

export const makeAuthState = (data: Partial<IAuthState>): IAuthState => {
  const defaultValue: IAuthState = {
    isLoading: false,
    user: null,
    token: "",
  };
  return { ...defaultValue, ...data };
};

export interface ISignInRequest {
  email: string;
  password: string;
}

export interface IAuthResponseData {
  user: IUser;
  token: string;
}

export interface ISignInResponse
  extends IObjectHttpResponse<IAuthResponseData> {}

export interface ISignUpResponse
  extends IObjectHttpResponse<IAuthResponseData> {}
