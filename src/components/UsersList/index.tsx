'use client'

import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import { UsersListProps } from './types'
import * as S from './styles'

import { UserCard } from '..'
import { theme } from '../../styles'

export const UsersList = ({ users=[] }: UsersListProps) => {
    return (
        <S.UsersList>
            {users.length ?
				users.map(user => (
					<UserCard key={user.id} user={user}/>
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
        </S.UsersList>
    )
}
