'use client'

import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { Spinner } from '@chakra-ui/react'

import { UsersListProps } from './types'
import * as S from './styles'

import { UserCard } from '..'
import { theme } from '../../styles'

export const UsersList = ({ users, isLoading }: UsersListProps) => {
	return (
		<S.UsersList>
			{isLoading ?
				<S.Centralize>
					<Spinner size='xl' color={theme.colors.primary} />
				</S.Centralize>
				:
				<>
					{users.length ?
						users.map(user => (
							<UserCard key={user.id} user={user} />
						))
						:
						<S.Centralize>
							<S.EmptyText>
								Nenhum resultado encontrado para a consulta
							</S.EmptyText>
						</S.Centralize>
					}
					{users.length >= 1 &&
						<S.Centralize>
							<S.SeeMoreContainer>
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
