import { call, put, takeLatest } from "redux-saga/effects";
import * as stateActions from "../slices/application.slice";
import { getApplicationsApi } from "../api";
import { IApplicationsResponse } from "../inferfaces";

export function* getApplicationsWorker() {
  try {
    yield put(stateActions.getApplicationsStart());
    const resp: IApplicationsResponse = yield call(getApplicationsApi);
    yield put(stateActions.getApplicationsSuccess(resp.data));
  } catch (err) {
    yield put(stateActions.getApplicationsFailure());
  }
}

export default function* ApplicationSagasRoot() {
  yield takeLatest(stateActions.getApplications, getApplicationsWorker);
}
