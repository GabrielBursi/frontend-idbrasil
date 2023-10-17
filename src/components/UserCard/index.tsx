'use client'

import React from 'react'
import { PiPencilSimpleBold } from 'react-icons/pi'
import { useDisclosure } from '@chakra-ui/react'

import { UserCardProps } from './types'
import * as S from './styles'
import { theme } from '../../styles'
import { ModalEditUser } from '..'

export const UserCard = ({ user }: UserCardProps) => {

	const { isOpen, onClose, onOpen } = useDisclosure()

    return (
		<>
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
					<PiPencilSimpleBold color={theme.colors.primary} size={25} title='Editar usuário' onClick={onOpen}/>
				</S.IconContainer>
			</S.UserCard>
			<ModalEditUser isOpen={isOpen} onClose={onClose} user={user}/>
		</>
    )
}
