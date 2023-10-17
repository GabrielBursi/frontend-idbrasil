'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { Listagem } from '@/templates'
import { UserServices } from '@/api/services'
import { User } from '@/types'

export default function ListagemPage() {

	const [users, setUsers] = useState<User[]>([]);
	const [errorMessage, setErrorMessage] = useState<string>();

	const { data, isFetched, isLoading, error } = useQuery({
		queryKey: ['users'],
		queryFn: UserServices.GetAll,
		staleTime: 5000,
	})

	useEffect(() => {
		console.log(data, error)
		if(isLoading || !isFetched || !data){
			return
		}

		if(error instanceof Error){
			setErrorMessage(error.message)
			return
		}

		if(data instanceof Error){
			setErrorMessage(data.message)
			return
		}

		setUsers(data)

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return (
		<Listagem users={users} isLoading={isLoading || !isFetched} error={errorMessage}/>
	)
}
