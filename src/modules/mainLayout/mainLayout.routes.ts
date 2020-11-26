import React from "react";
import { SESSION_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE } from "../../constants";
import { IRoute } from "../../interfaces";

const Session = React.lazy(() => import("./pages/session/Session"));
const SignIn = React.lazy(() => import("./pages/signIn/SignIn"));
const SignUp = React.lazy(() => import("./pages/signUp/SignUp"));

const mainLayoutRoutes: IRoute[] = [
  {
    path: SIGN_IN_ROUTE,
    component: SignIn,
    exact: true,
  },
  {
    path: SIGN_UP_ROUTE,
    component: SignUp,
    exact: true,
  },
  {
    path: SESSION_ROUTE,
    component: Session,
    exact: false,
  },
];
export default mainLayoutRoutes;
