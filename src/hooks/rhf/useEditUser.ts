import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";


export enum Status {
	ativar = 'Ativar',
	desativar = 'Desativar',

}

const EditUser = z.object({
	name: z.string()
		.nonempty('Esse campo é obrigatório.')
		.min(6, 'Esse campo deve conter pelo menos 6 caracteres.'),
	cpf: z.string()
		.nonempty('Esse campo é obrigatório.')
		.regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Esse campo deve seguir o formato de CPF XXX.XXX.XXX-XX.'),
	celular: z.string()
		.nonempty('Esse campo é obrigatório.')
		.regex(/^(\d{2})\s(\d{4}-\d{4})$/, 'Esse campo deve seguir o formato de telefone 99 9999-9999.'),
	ativo: z.nativeEnum(Status, {
		errorMap: () => ({ message: 'Escolha o status do usuário.' })
	}),
})

export type EditUserData = z.infer<typeof EditUser>

export const useEditUser = () => {

	const { handleSubmit, formState: { errors, isSubmitting }, register, clearErrors, setFocus, reset, setValue, control } = useForm<EditUserData>({
		defaultValues: {
			name: '',
			celular: '',
			cpf: '',
			ativo: Status.desativar
		},
		resolver: zodResolver(EditUser),
	});

	const hasErrors = Object.keys(errors).length > 0;
	const formRef = useRef<HTMLFormElement>(null)

	return {
		EditUser,
		errors,
		isSubmitting,
		register,
		clearErrors,
		setFocus,
		handleSubmit,
		reset,
		setValue,
		hasErrors,
		formRef,
		control
	}
}
