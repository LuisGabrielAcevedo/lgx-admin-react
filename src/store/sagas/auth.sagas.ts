import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { call, put, takeLatest } from "redux-saga/effects";
import * as authActions from "../slices/auth.slice";
import { signInApi } from "../api";
import { ISignInRequest, ISignInResponse } from "../inferfaces";
import { setAccessToken } from "../../services/http.service";
import { SESSION_ROUTE, SIGN_IN_ROUTE } from "../../constants";

export function* signInWorker(actonData: PayloadAction<ISignInRequest>) {
  try {
    yield put(authActions.signInStart());
    const resp: ISignInResponse = yield call(signInApi, actonData.payload);
    yield call(setAccessToken, resp.data.token);
    yield put(authActions.signInSuccess(resp.data));
    yield put(push(SESSION_ROUTE));
  } catch (error) {
    yield put(authActions.signInFailure());
  }
}

export function* signOutWorker() {
  try {
    yield put(authActions.signOutStart());
    yield put(authActions.signOutSuccess());
    yield put(push(SIGN_IN_ROUTE));
  } catch (error) {
    yield put(authActions.signOutFailure());
  }
}

export default function* authSagasRoot() {
  yield takeLatest(authActions.signIn, signInWorker);
  yield takeLatest(authActions.signOut, signOutWorker);
}
