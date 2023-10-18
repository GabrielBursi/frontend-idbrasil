'use client'

import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { Spinner } from '@chakra-ui/react'

import { UsersListProps } from './types'
import * as S from './styles'

import { UserCard } from '..'
import { theme } from '../../styles'
import { useMyContext } from '../../context'

export const UsersList = ({ users, isLoading }: UsersListProps) => {

	const [usersPaginated, setUsersPaginated] = useState(users);
	const { showMoreUsers, visibleUsersCount, totalUsers, inputFilterRef } = useMyContext()

	useEffect(() => {
		const usersPaginated = users.slice(0, visibleUsersCount)
		setUsersPaginated(usersPaginated)
	}, [users, visibleUsersCount]);

	return (
		<S.UsersList>
			{isLoading ?
				<S.Centralize>
					<Spinner size='xl' color={theme.colors.primary} />
				</S.Centralize>
				:
				<>
					{users.length ?
						usersPaginated.map(user => (
							<UserCard key={user.id} user={user} />
						))
						:
						<S.Centralize>
							<S.EmptyText>
								Nenhum resultado encontrado para a consulta
							</S.EmptyText>
						</S.Centralize>
					}
					{((visibleUsersCount < totalUsers) && !inputFilterRef.current?.value) &&
						<S.Centralize>
							<S.SeeMoreContainer onClick={showMoreUsers}>
								<S.SeeMoreText>
									Ver mais
								</S.SeeMoreText>
								<MdOutlineKeyboardArrowDown size={25} color={theme.colors.primary} />
							</S.SeeMoreContainer>
						</S.Centralize>
					}
				</>
			}
		</S.UsersList>
	)
}
