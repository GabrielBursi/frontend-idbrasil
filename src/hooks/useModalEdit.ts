import { useToast } from "@chakra-ui/react";
import { User } from "@/types";
import { EditUserData, Status } from ".";

export const useModalEdit = () => {

	const toast = useToast()

	const verifySameStatus = (status: Status) => {
		return status === Status.ativar;
	};

	const compareSameDataUser = (dataFromForm: EditUserData, user: User | undefined) => {
		return dataFromForm.celular === user?.telefone
			&& dataFromForm.cpf === user.cpf
			&& dataFromForm.name === user.nome
	}

	const closeModalSuccess = (onClose: () => void) => {
		toast({
			title: 'Pessoa editada com sucesso.',
			status: 'success',
			duration: 5000,
			isClosable: true,
			position: 'top-right'
		})

		onClose()
	}

	const showToastError = (description?: string) => {
		return toast({
			title: 'Ocorreu algum erro ao tentar editar pessoa.',
			description: description ?? '',
			status: 'error',
			duration: 5000,
			isClosable: true,
			position: 'top-right'
		})
	}

	return { closeModalSuccess, compareSameDataUser, verifySameStatus, showToastError }
}
