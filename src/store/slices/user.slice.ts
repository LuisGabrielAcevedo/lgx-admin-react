import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces";
import { IUserState, makeUserState } from "../inferfaces";

const sliceName = "user";

const initialState: IUserState = makeUserState({});

const userSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    getUsersStart(state) {
      state.users.isLoading = true;
    },
    getUsersSuccess(state, action: PayloadAction<IUser[]>) {
      state.users.isLoading = false;
      state.users.data = action.payload;
    },
    getUsersFailure(state) {
      state.users.isLoading = false;
    },
    findUserStart(state) {
      state.user.isLoading = true;
    },
    findUserSuccess(state, action: PayloadAction<IUser>) {
      state.user.isLoading = false;
      state.user.data = action.payload;
    },
    findUserFailure(state) {
      state.user.isLoading = false;
    },
  },
});

const { actions, reducer } = userSlice;

export const {
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  findUserFailure,
  findUserStart,
  findUserSuccess,
} = actions;

export const getUsers = createAction(`${sliceName}/getUsers`);
export const findUser = createAction(`${sliceName}/findUser`);

export default reducer;
