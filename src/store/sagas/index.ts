import { all } from "redux-saga/effects";
import authSagas from "./auth.sagas";
import userSagas from "./user.sagas";
import stateSagas from "./state.sagas";
import applicationSagas from "./application.sagas";

export default function* rootSaga() {
  yield all([authSagas(), userSagas(), stateSagas(), applicationSagas()]);
}
