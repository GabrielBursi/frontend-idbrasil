import React, { ReactNode, createContext, useContext, useState } from 'react';
import { User } from '@/types';
import { UserServices } from '@/api/services';

interface UsersContextData {
	users: User[];
	setUsers: React.Dispatch<React.SetStateAction<User[]>>;
	errorMessage: string | undefined;
	setErrorMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
	isLoadingUsers: boolean;
	setIsLoadingUsers: React.Dispatch<React.SetStateAction<boolean>>;
	getAllUsers: () => Promise<void>;
	filterUsersAccordingInput: (value: string) => void
}

const UsersContext = createContext({} as UsersContextData);

export const UsersContextProvider = ({ children }: { children: ReactNode }) => {

	const [users, setUsers] = useState<User[]>([]);
	const [errorMessage, setErrorMessage] = useState<string>();
	const [isLoadingUsers, setIsLoadingUsers] = useState(false);

	const filterUsersAccordingInput = (value: string) => {
		const filteredUsers = users.filter(user =>
			Object.values(user).some(val =>
				val.toString().toLowerCase().includes(value.toLowerCase())
			)
		);

		setUsers(filteredUsers);
	}

	const getAllUsers = async () => {
		setIsLoadingUsers(true)
		const users = await UserServices.GetAll()

		if(users instanceof Error){
			setErrorMessage(users.message)
			return
		}

		setIsLoadingUsers(false)

		setUsers(users)
	}

	return (
		<UsersContext.Provider value={{
			setUsers,
			users,
			errorMessage,
			setErrorMessage,
			isLoadingUsers,
			setIsLoadingUsers,
			getAllUsers,
			filterUsersAccordingInput
		}}>
			{children}
		</UsersContext.Provider>
	)
};

export const useMyContext = () => {
	const context = useContext(UsersContext);
	return context;
};
