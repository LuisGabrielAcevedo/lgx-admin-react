import React from "react";
import {
  USER_LIST_ROUTE,
  APPLICATION_LIST_ROUTE,
  STATE_LIST_ROUTE,
  ROLE_LIST_ROUTE,
  PERMISSION_LIST_ROUTE,
  COUNTRY_LIST_ROUTE,
  CURRENCY_LIST_ROUTE,
  COMPANY_LIST_ROUTE,
  LOCATION_LIST_ROUTE,
} from "../../constants";
import { IRoute } from "../../interfaces";

const ApplicationList = React.lazy(
  () => import("./pages/applicationList/ApplicationList")
);
const StateList = React.lazy(() => import("./pages/stateList/StateList"));
const UserList = React.lazy(() => import("./pages/userList/UserList"));
const RoleList = React.lazy(() => import("./pages/roleList/RoleList"));
const PermissionList = React.lazy(
  () => import("./pages/permissionList/PermissionList")
);
const CompanyList = React.lazy(() => import("./pages/companyList/CompanyList"));
const LocationList = React.lazy(
  () => import("./pages/locationList/LocationList")
);

const CurrencyList = React.lazy(
  () => import("./pages/currencyList/CurrencyList")
);
const CountryList = React.lazy(() => import("./pages/countryList/CountryList"));

const usersRoutes: IRoute[] = [
  {
    path: APPLICATION_LIST_ROUTE,
    component: ApplicationList,
    exact: true,
  },
  {
    path: STATE_LIST_ROUTE,
    component: StateList,
    exact: true,
  },
  {
    path: USER_LIST_ROUTE,
    component: UserList,
    exact: true,
  },
  {
    path: ROLE_LIST_ROUTE,
    component: RoleList,
    exact: true,
  },
  {
    path: PERMISSION_LIST_ROUTE,
    component: PermissionList,
    exact: true,
  },
  {
    path: COUNTRY_LIST_ROUTE,
    component: CountryList,
    exact: true,
  },
  {
    path: CURRENCY_LIST_ROUTE,
    component: CurrencyList,
    exact: true,
  },
  {
    path: COMPANY_LIST_ROUTE,
    component: CompanyList,
    exact: true,
  },
  {
    path: LOCATION_LIST_ROUTE,
    component: LocationList,
    exact: true,
  },
];
export default usersRoutes;
