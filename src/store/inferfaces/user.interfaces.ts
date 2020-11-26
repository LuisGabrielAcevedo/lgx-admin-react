import {
  IArrayHttpResponse,
  IObjectHttpResponse,
  IUser,
} from "../../interfaces";
import { IStoreFlowValues } from "./store.interfaces";

export interface IUserState {
  users: IStoreFlowValues<IUser[]>;
  user: IStoreFlowValues<IUser | null>;
}

export const makeUserState = (data: Partial<IUserState>): IUserState => {
  const defaultValue: IUserState = {
    users: {
      isLoading: false,
      error: null,
      data: [],
    },
    user: {
      isLoading: false,
      error: null,
      data: null,
    },
  };
  return { ...defaultValue, ...data };
};

export interface IUsersResponse extends IArrayHttpResponse<IUser> {}
export interface IUserResponse extends IObjectHttpResponse<IUser> {}
