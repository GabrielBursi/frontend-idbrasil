import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

const CreateUser = z.object({
    name: z.string()
        .nonempty('Esse campo é obrigatório.')
        .min(6, 'Esse campo deve conter pelo menos 6 caracteres.'),
    cpf: z.string()
        .nonempty('Esse campo é obrigatório.')
		.regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Esse campo deve seguir o formato de CPF XXX.XXX.XXX-XX.'),
    celular: z.string()
        .nonempty('Esse campo é obrigatório.')
        .regex(/^(\d{2})\s(\d{4}-\d{4})$/, 'Esse campo deve seguir o formato de telefone 99 9999-9999.')
})

export type CreateUserData = z.infer<typeof CreateUser>

export const useCreateUser = () => {

    const { handleSubmit, formState: { errors, isSubmitting }, register, clearErrors, setFocus, reset, setValue } = useForm<CreateUserData>({
        defaultValues: {
            name: '',
            celular: '',
			cpf: ''
        },
        resolver: zodResolver(CreateUser),
    });

    const hasErrors = Object.keys(errors).length > 0;
    const formRef = useRef<HTMLFormElement>(null)

    return {
        CreateUser,
        errors,
        isSubmitting,
        register,
        clearErrors,
        setFocus,
        handleSubmit,
        reset,
        setValue,
        hasErrors,
        formRef
    }
}
