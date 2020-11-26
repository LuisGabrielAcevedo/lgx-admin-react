import { PATHS } from "../../constants";
import { get } from "../../services/http.service";
import { IApplicationsResponse, IApplicationResponse } from "../inferfaces";

export const getApplicationsApi = async (): Promise<IApplicationsResponse> =>
  get(PATHS.applications);

export const findApplicationApi = async (
  id: string
): Promise<IApplicationResponse> => get(`${PATHS.applications}/${id}`);
