import { combineReducers } from "redux";
import { History } from "history";
import { connectRouter } from "connected-react-router";
import AuthReducer from "../slices/auth.slice";
import UserReducer from "../slices/user.slice";
import StateReducer from "../slices/state.slice";
import ApplicatonReducer from "../slices/application.slice";
import { IAppState } from "../inferfaces";

const createRootReducer = (history: History) =>
  combineReducers<IAppState>({
    router: connectRouter(history),
    auth: AuthReducer,
    user: UserReducer,
    state: StateReducer,
    application: ApplicatonReducer,
  });

export default createRootReducer;
