import { PATHS } from "../../constants";
import { get } from "../../services/http.service";
import { IStatesResponse, IStateResponse } from "../inferfaces";

export const getStatesApi = async (): Promise<IStatesResponse> =>
  get(PATHS.states, { params: { populate: "country", page: 1 } });

export const findStateApi = async (id: string): Promise<IStateResponse> =>
  get(`${PATHS.states}/${id}`);
