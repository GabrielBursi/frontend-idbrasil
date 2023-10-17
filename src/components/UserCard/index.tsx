'use client'

import React from 'react'
import { PiPencilSimpleBold } from 'react-icons/pi'

import { UserCardProps } from './types'
import * as S from './styles'
import { theme } from '../../styles'

export const UserCard = ({ user }: UserCardProps) => {

    return (
        <S.UserCard>
            <S.TextContainer>
				<S.Name>
					{user.nome}
				</S.Name>
				<S.Info>
					<S.InfoText>
						CPF: {user.cpf}
					</S.InfoText>
					<S.InfoText>
						Celular: {user.telefone}
					</S.InfoText>
				</S.Info>
			</S.TextContainer>
			<S.IconContainer>
				<PiPencilSimpleBold color={theme.colors.primary} size={25} title='Editar usuário'/>
			</S.IconContainer>
        </S.UserCard>
    )
}
