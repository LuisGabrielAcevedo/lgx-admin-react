import {
  IArrayHttpResponse,
  IObjectHttpResponse,
  IState,
} from "../../interfaces";
import { IStoreFlowValues } from "./store.interfaces";

export interface IStateState {
  states: IStoreFlowValues<IState[]>;
  state: IStoreFlowValues<IState | null>;
}

export const makeStateState = (data: Partial<IStateState>): IStateState => {
  const defaultValue: IStateState = {
    states: {
      isLoading: false,
      error: null,
      data: [],
    },
    state: {
      isLoading: false,
      error: null,
      data: null,
    },
  };
  return { ...defaultValue, ...data };
};

export interface IStatesResponse extends IArrayHttpResponse<IState> {}
export interface IStateResponse extends IObjectHttpResponse<IState> {}
