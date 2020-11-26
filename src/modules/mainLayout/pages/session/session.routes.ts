import React from "react";
import { DASHBOARD_ROUTE, USERS_ROUTE } from "../../../../constants";
import { IRoute } from "../../../../interfaces";

const Dashboard = React.lazy(() => import("../../../dashboard/Dashboard"));
const Users = React.lazy(() => import("../../../users/Users"));

const sessionRoutes: IRoute[] = [
  {
    path: DASHBOARD_ROUTE,
    component: Dashboard,
    exact: true,
  },
  {
    path: USERS_ROUTE,
    component: Users,
    exact: false,
  },
];
export default sessionRoutes;
