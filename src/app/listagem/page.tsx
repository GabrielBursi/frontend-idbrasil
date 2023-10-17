'use client'

import { useEffect } from 'react'

import { Listagem } from '@/templates'
import { useMyContext } from '@/context'

export default function ListagemPage() {

	const { users, errorMessage, isLoadingUsers, getAllUsers } = useMyContext()

	useEffect(() => {
		getAllUsers()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Listagem users={users} isLoading={isLoadingUsers} error={errorMessage}/>
	)
}
