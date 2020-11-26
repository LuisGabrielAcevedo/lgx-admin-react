import {
  IApplication,
  IArrayHttpResponse,
  IObjectHttpResponse,
} from "../../interfaces";
import { IStoreFlowValues } from "./store.interfaces";

export interface IApplicationState {
  applications: IStoreFlowValues<IApplication[]>;
  application: IStoreFlowValues<IApplication | null>;
}

export const makeApplicationState = (
  data: Partial<IApplicationState>
): IApplicationState => {
  const defaultValue: IApplicationState = {
    applications: {
      isLoading: false,
      error: null,
      data: [],
    },
    application: {
      isLoading: false,
      error: null,
      data: null,
    },
  };
  return { ...defaultValue, ...data };
};

export interface IApplicationsResponse
  extends IArrayHttpResponse<IApplication> {}
export interface IApplicationResponse
  extends IObjectHttpResponse<IApplication> {}
