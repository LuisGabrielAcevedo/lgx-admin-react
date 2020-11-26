import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./slices";
import rootSaga from "./sagas";
import history from "../services/router.service";

const customizedDefaultMiddleware = getDefaultMiddleware({
  serializableCheck: false,
  immutableCheck: false,
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = configureStore({
  reducer: rootReducer(history),
  middleware: [...customizedDefaultMiddleware, ...middlewares],
  devTools: false,
  enhancers: [],
});

sagaMiddleware.run(rootSaga);

export default store;
