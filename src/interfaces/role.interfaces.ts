import { ICompany } from "./company.interfaces";
import { ILocation } from "./location.interfaces";
import { IPermission } from "./permission.interfaces";

export interface IRole {
  name: string;
  company: ICompany | string;
  description: string;
  permissions: IPermission[] | string[];
  stores: ILocation[] | string[];
  createdAt: string;
  updatedAt: string;
}
