import { AxiosError } from "axios";
import { User } from "@/types";
import { Api } from "@/api/config";

export const Create = async (user: Omit<User, 'id'>): Promise<User | Error> => {
	try {
		const { data } = await Api.post<User>('/pessoa', { ...user });
		return data
	} catch (error) {
		const err = error as AxiosError
		const customError = err?.response?.data;

		if (customError) {
			return new Error(`Ocorreu o seguinte erro: ${customError}`)
		} else {
			return new Error(process.env.NEXT_PUBLIC_API_ERROR_GLOBAL)
		}
	}
}
