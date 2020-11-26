import { call, put, takeLatest } from "redux-saga/effects";
import * as usersActions from "../slices/user.slice";
import { getUsersApi } from "../api";
import { IUsersResponse } from "../inferfaces";

export function* getUsersWorker() {
  try {
    yield put(usersActions.getUsersStart());
    const resp: IUsersResponse = yield call(getUsersApi);
    yield put(usersActions.getUsersSuccess(resp.data));
  } catch (err) {
    yield put(usersActions.getUsersFailure());
  }
}

export default function* userSagasRoot() {
  yield takeLatest(usersActions.getUsers, getUsersWorker);
}
