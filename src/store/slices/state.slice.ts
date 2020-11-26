import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "../../interfaces";
import { IStateState, makeStateState } from "../inferfaces";

const sliceName = "state";

const initialState: IStateState = makeStateState({});

const stateSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    getStatesStart(state) {
      state.states.isLoading = true;
    },
    getStatesSuccess(state, action: PayloadAction<IState[]>) {
      state.states.isLoading = false;
      state.states.data = action.payload;
    },
    getStatesFailure(state) {
      state.states.isLoading = false;
    },
    findStateStart(state) {
      state.state.isLoading = true;
    },
    findStateSuccess(state, action: PayloadAction<IState>) {
      state.state.isLoading = false;
      state.state.data = action.payload;
    },
    findStateFailure(state) {
      state.state.isLoading = false;
    },
  },
});

const { actions, reducer } = stateSlice;

export const {
  getStatesFailure,
  getStatesStart,
  getStatesSuccess,
  findStateFailure,
  findStateStart,
  findStateSuccess,
} = actions;

export const getStates = createAction(`${sliceName}/getStates`);
export const findState = createAction(`${sliceName}/findState`);

export default reducer;
