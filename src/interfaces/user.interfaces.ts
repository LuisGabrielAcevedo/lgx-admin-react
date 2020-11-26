import { ICompany } from "./company.interfaces";
import { IFile } from "./file.interfaces";
import { IRole } from "./role.interfaces";
import { IUserInformation } from "./userInformation.interfaces";

export type AppRoLe = "USER" | "ADMIN";

export interface IUser {
  email: string;
  firebaseId: string;
  firstName: string;
  lastName: string;
  appRole: AppRoLe;
  company: ICompany | string;
  role: IRole | string;
  userName: string;
  isActive: boolean;
  isValid: boolean;
  info: IUserInformation | string;
  profileImage: IFile | string;
  bannerImage: IFile | string;
  following: number;
  followers: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
