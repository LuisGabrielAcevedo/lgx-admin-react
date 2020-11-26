import { PATHS } from "../../constants";
import { post } from "../../services/http.service";
import { ISignInRequest, ISignInResponse } from "../inferfaces";

export const signInApi = async (
  data: ISignInRequest
): Promise<ISignInResponse> => post(PATHS.signIn, { data });
