import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import { IApplication } from "../../interfaces";
import { IApplicationState, makeApplicationState } from "../inferfaces";

const sliceName = "role";

const initialState: IApplicationState = makeApplicationState({});

const stateSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    getApplicationsStart(state) {
      state.applications.isLoading = true;
    },
    getApplicationsSuccess(state, action: PayloadAction<IApplication[]>) {
      state.applications.isLoading = false;
      state.applications.data = action.payload;
    },
    getApplicationsFailure(state) {
      state.applications.isLoading = false;
    },
    findApplicationStart(state) {
      state.application.isLoading = true;
    },
    findApplicationSuccess(state, action: PayloadAction<IApplication>) {
      state.application.isLoading = false;
      state.application.data = action.payload;
    },
    findApplicationFailure(state) {
      state.application.isLoading = false;
    },
  },
});

const { actions, reducer } = stateSlice;

export const {
  getApplicationsFailure,
  getApplicationsStart,
  getApplicationsSuccess,
  findApplicationFailure,
  findApplicationStart,
  findApplicationSuccess,
} = actions;

export const getApplications = createAction(`${sliceName}/getApplications`);
export const findApplication = createAction(`${sliceName}/findApplication`);

export default reducer;
