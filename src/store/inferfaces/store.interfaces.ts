import { RouterState } from "connected-react-router";
import { IApplicationState } from "./application.interfaces";
import { IAuthState } from "./auth.interfaces";
import { IStateState } from "./state.interfaces";
import { IUserState } from "./user.interfaces";

export interface IStoreFlowValues<T> {
  isLoading: boolean;
  error: any;
  data: T;
}

export interface IAppState {
  router: RouterState;
  auth: IAuthState;
  user: IUserState;
  state: IStateState;
  application: IApplicationState;
}
