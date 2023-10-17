import { AxiosError } from "axios";
import { Api } from "../config";
import { User } from "@/types";

export const UpdateStatus = async (id: number, user: Pick<User, 'ativo'>): Promise<void | Error> => {
	try {
		await Api.put(`/pessoa_status/${id}`, { ...user })
	} catch (error) {
		const err = error as AxiosError
		const customError = err?.response?.data;

		if (customError) {
			return new Error(`Ocorreu o seguinte erro: ${customError}`)
		} else {
			return new Error(process.env.NEXT_PUBLIC_API_ERROR_GLOBAL)
		};
	}
}