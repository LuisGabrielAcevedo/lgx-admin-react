import { call, put, takeLatest } from "redux-saga/effects";
import * as stateActions from "../slices/state.slice";
import { getStatesApi } from "../api";
import { IStatesResponse } from "../inferfaces";

export function* getStatesWorker() {
  try {
    yield put(stateActions.getStatesStart());
    const resp: IStatesResponse = yield call(getStatesApi);
    yield put(stateActions.getStatesSuccess(resp.data));
  } catch (err) {
    yield put(stateActions.getStatesFailure());
  }
}

export default function* stateSagasRoot() {
  yield takeLatest(stateActions.getStates, getStatesWorker);
}
