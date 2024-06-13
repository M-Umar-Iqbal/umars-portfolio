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
    case "getAbout":
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
    case "getBlogs":
      try {
        const response = await ApiService.fetchData<T>({
          url: `/blogs`,
          method: 'get',
        });
        return response as AxiosResponse<T>;
      } catch (err: any) {
        console.log("Get About Error: ", err);
        throw new Error(err);
      }
    case "getProjects":
      try {
        const response = await ApiService.fetchData<T>({
          url: `/projects`,
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
