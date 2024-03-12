import axios, {
	AxiosError,
	AxiosRequestConfig
} from "axios";
import { CommonErrorType } from "../../../types";
import { AxiosBaseQueryFn } from "./baseQuery.types";

export const configuration: AxiosRequestConfig = {
	baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*"
	},
	timeout: 45000,
	maxContentLength: 200000,
	validateStatus: (status: number) => status >= 200 && status < 300,
	maxRedirects: 5
};

const axiosInstance = axios.create(configuration);

axiosInstance.interceptors.response.use(
	undefined,
	(error) =>
		Promise.reject(error)
);

export const axiosBaseQuery =
	({ baseUrl }: { baseUrl: string } = { baseUrl: "" }): AxiosBaseQueryFn =>
		async ({ url, method, data, ...rest }) => {
			try {
				const { headers, ...restParams } = rest;
				const result = await axiosInstance({
					url: `${baseUrl}${url}`,
					method,
					data,
					headers: {
						...headers
					},
					...restParams
				});

				return { data: result.data };
			} catch (axiosError) {
				const error = axiosError as AxiosError<CommonErrorType>;

				return {
					error: {
						status: error?.response?.status,
						message: error?.response?.data.message
					}
				};
			}
		};
