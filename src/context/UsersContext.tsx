import React, { ReactNode, createContext, useContext, useRef, useState } from 'react';
import { User } from '@/types';
import { FakeUserServices } from '@/api/services';
import { ENV_VARIABLES } from '@/env';

interface UsersContextData {
	users: User[];
	setUsers: React.Dispatch<React.SetStateAction<User[]>>;
	errorMessage: string | undefined;
	setErrorMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
	isLoadingUsers: boolean;
	setIsLoadingUsers: React.Dispatch<React.SetStateAction<boolean>>;
	totalUsers: number
	setTotalUsers: React.Dispatch<React.SetStateAction<number>>;
	visibleUsersCount: number;
	setVisibleUsersCount: React.Dispatch<React.SetStateAction<number>>;
	inputFilterRef: React.MutableRefObject<HTMLInputElement | null>;
	getAllUsers: () => Promise<void>;
	filterUsersAccordingInput: (value: string) => void;
	showMoreUsers: () => void;
}

const UsersContext = createContext({} as UsersContextData);

export const UsersContextProvider = ({ children }: { children: ReactNode }) => {

	const [users, setUsers] = useState<User[]>([]);
	const [errorMessage, setErrorMessage] = useState<string>();
	const [isLoadingUsers, setIsLoadingUsers] = useState(false);
	const [totalUsers, setTotalUsers] = useState(0);
	const [visibleUsersCount, setVisibleUsersCount] = useState<number>(ENV_VARIABLES.USERS_PER_PAGE);

	const inputFilterRef = useRef<HTMLInputElement | null>(null);

	const filterUsersAccordingInput = (value: string) => {
		const filteredUsers = users.filter(user =>
			Object.values(user).some(val =>
				val.toString().toLowerCase().includes(value.toLowerCase())
			)
		);

		setUsers(filteredUsers)
	}

	const getAllUsers = async () => {
		setIsLoadingUsers(true)
		const allUsers = await FakeUserServices.GetAll()

		if (allUsers instanceof Error) {
			setIsLoadingUsers(false)
			setErrorMessage(allUsers.message)
			return
		}

		setTotalUsers(allUsers.length)
		setIsLoadingUsers(false)

		setUsers(allUsers)
	}

	const showMoreUsers = () => {
		setVisibleUsersCount(prevCount => prevCount + 10);
	};

	return (
		<UsersContext.Provider value={{
			setUsers,
			users,
			errorMessage,
			setErrorMessage,
			isLoadingUsers,
			setIsLoadingUsers,
			getAllUsers,
			filterUsersAccordingInput,
			totalUsers,
			setTotalUsers,
			showMoreUsers,
			visibleUsersCount,
			setVisibleUsersCount,
			inputFilterRef
		}}>
			{children}
		</UsersContext.Provider>
	)
};

export const useMyContext = () => {
	const context = useContext(UsersContext);
	return context;
};
