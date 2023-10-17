import React from 'react'
import { UsersListProps } from './types'
import * as S from './styles'

import { UserCard } from '..'

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
        </S.UsersList>
    )
}
