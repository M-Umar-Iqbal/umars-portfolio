import { NextApiRequest } from "next";
import { ICallType } from "../utils/types/ResetHelper";
import ApiService from "./api-service";
import { AxiosResponse } from "axios";

export const restHelper = async <T>(
  req: NextApiRequest,
  payload: unknown,
  type: ICallType
) => {
  switch (type) {
    case "getRequest":
      try {
        const response = await ApiService.fetchData<T>({
          url: `/about`,
          method: 'get',
        });
        return response as AxiosResponse<T>;
      } catch (err: any) {
        console.log("Get About Error: ", err);
        throw new Error(err);
      }
    default:
      throw new Error("Invalid request type");
  }
};
