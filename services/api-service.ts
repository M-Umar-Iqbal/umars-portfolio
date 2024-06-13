import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import BaseService from "./axios-service";

const ApiService = {
    fetchData<Response = unknown, Request = Record<string, unknown>>(params:
        AxiosRequestConfig<Request>
    ) {
        return new Promise<AxiosResponse<Response>>((resolve, reject) => {
            BaseService(params).then((response: AxiosResponse<Response>) => {
                resolve(response);
            }).catch((error: AxiosError) => {
                reject(error);
            })
        })
    }
}
export default ApiService;
