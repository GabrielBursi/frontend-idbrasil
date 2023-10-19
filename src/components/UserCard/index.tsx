'use client'

import React, { memo, useState } from 'react'
import { PiPencilSimpleBold } from 'react-icons/pi'
import { Badge, useDisclosure } from '@chakra-ui/react'

import { UserCardProps } from './types'
import * as S from './styles'
import { theme } from '../../styles'
import { ModalEditUser } from '..'
import { User } from '../../types'

const UserCardMemo = ({ user }: UserCardProps) => {

	const [newDataUser, setNewDataUser] = useState<User>();
	const { isOpen, onClose, onOpen } = useDisclosure()

	const convertStatusToText = (status: boolean) => {
		if(status) return 'Ativo'
		else return 'Desativo'
	}

	const convertStatusToColor = (status: boolean) => {
		if (status) return 'green'
		else return 'red'
	}

    return (
		<>
			<S.UserCard>
				<S.TextContainer>
					<S.Name>
						{newDataUser ? newDataUser.nome : user.nome}
					</S.Name>
					<S.Info>
						<S.InfoText>
							CPF: {newDataUser ? newDataUser.cpf : user.cpf}
						</S.InfoText>
						<S.InfoText>
							Celular: {newDataUser ? newDataUser.telefone : user.telefone}
						</S.InfoText>
					</S.Info>
					<Badge
						fontSize={theme.font.sizes.xsmall}
						colorScheme={newDataUser ? convertStatusToColor(newDataUser.ativo) : convertStatusToColor(user.ativo)}
					>
						{newDataUser ? convertStatusToText(newDataUser.ativo) : convertStatusToText(user.ativo)}
					</Badge>
				</S.TextContainer>
				<S.IconContainer>
					<PiPencilSimpleBold color={theme.colors.primary} size={25} title='Editar usuário' onClick={onOpen}/>
				</S.IconContainer>
			</S.UserCard>
			<ModalEditUser
				isOpen={isOpen}
				onClose={onClose}
				user={newDataUser ?? user}
				setNewDataUser={setNewDataUser}
			/>
		</>
    )
}

export const UserCard = memo(UserCardMemo)
