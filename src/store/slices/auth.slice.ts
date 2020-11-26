import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import {
  IAuthState,
  ISignInRequest,
  makeAuthState,
  IAuthResponseData,
} from "../inferfaces";

const sliceName = "auth";

const initialState: IAuthState = makeAuthState({});

const authSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    signInStart(state) {
      state.isLoading = true;
    },
    signInSuccess(state, action: PayloadAction<IAuthResponseData>) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    signInFailure(state) {
      state.isLoading = false;
    },
    signOutStart(state) {
      state.isLoading = true;
    },
    signOutSuccess(state) {
      state.isLoading = false;
      state.user = null;
      state.token = "";
    },
    signOutFailure(state) {
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = authSlice;

export const {
  signInFailure,
  signInStart,
  signInSuccess,
  signOutFailure,
  signOutStart,
  signOutSuccess,
} = actions;

export const signIn = createAction<ISignInRequest>(`${sliceName}/signIn`);
export const signOut = createAction(`${sliceName}/signOut`);

export default reducer;
