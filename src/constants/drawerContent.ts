import { IDrawerItem } from "../interfaces";
import {
  APPLICATION_LIST_ROUTE,
  COUNTRY_LIST_ROUTE,
  DASHBOARD_ROUTE,
  STATE_LIST_ROUTE,
  USER_LIST_ROUTE,
  LOCATION_LIST_ROUTE,
  COMPANY_LIST_ROUTE,
  ROLE_LIST_ROUTE,
  PERMISSION_LIST_ROUTE,
  CURRENCY_LIST_ROUTE,
} from "./routes";

export const drawerItems: IDrawerItem[] = [
  {
    name: "Dashboard",
    icon: "fas fa-chart-area",
    path: DASHBOARD_ROUTE,
  },
  {
    name: "Admin users",
    icon: "fas fa-users-cog",
    children: [
      {
        name: "Users",
        icon: "fas fa-users",
        path: USER_LIST_ROUTE,
      },
      {
        name: "Companies",
        icon: "fas fa-building",
        path: COMPANY_LIST_ROUTE,
      },
      {
        name: "Locations",
        icon: "fas fa-store",
        path: LOCATION_LIST_ROUTE,
      },
      {
        name: "Roles",
        icon: "fas fa-user-tag",
        path: ROLE_LIST_ROUTE,
      },
      {
        name: "Permissions",
        icon: "fas fa-times-circle",
        path: PERMISSION_LIST_ROUTE,
      },
      {
        name: "Applications",
        icon: "fab fa-sketch",
        path: APPLICATION_LIST_ROUTE,
      },
      {
        name: "Currencies",
        icon: "fas fa-dollar-sign",
        path: CURRENCY_LIST_ROUTE,
      },
      {
        name: "Countries",
        icon: "fas fa-globe-americas",
        path: COUNTRY_LIST_ROUTE,
      },
      {
        name: "States",
        icon: "fas fa-flag",
        path: STATE_LIST_ROUTE,
      },
    ],
  },
];
