import axios, { AxiosError } from "axios";
import { decryptUserInfo } from "../../../utils";
import { configuration } from "../baseQuery/baseQuery";
import { AxiosBaseQueryFn } from "../baseQuery/baseQuery.types";

const authAxiosInstance = axios.create(configuration);

authAxiosInstance.interceptors.response.use(
	undefined,
	(error) =>
		Promise.reject(error)
);

export const authAxiosBaseQuery =
	({ baseUrl }: { baseUrl: string } = { baseUrl: "" }): AxiosBaseQueryFn =>
		async (
			{ url, method, data, ...rest }, { getState }
		) => {
			try {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const state = getState() as any;
				const cryptoToken = state.authSlice.jwt;

				const token = decryptUserInfo(cryptoToken);
				const { headers, ...restParams } = rest;
				const result = await authAxiosInstance({
					url: `${baseUrl}${url}`,
					method,
					data,
					headers: {
						...headers,
						Authorization: `Bearer ${token}`
					},
					...restParams
				});

				return { data: result.data };
			} catch (axiosError) {
				const error = axiosError as AxiosError;
				const status = error?.response?.status as number;

				return {
					error: {
						status: status,
						data: error?.response?.data
					}
				};
			}
		};
