import { PATHS } from "../../constants";
import { get } from "../../services/http.service";
import { IUserResponse, IUsersResponse } from "../inferfaces";

export const getUsersApi = async (): Promise<IUsersResponse> =>
  get(PATHS.users);

export const findUserApi = async (id: string): Promise<IUserResponse> =>
  get(`${PATHS.users}/${id}`);
