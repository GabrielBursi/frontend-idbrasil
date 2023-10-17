'use client'

import React from 'react'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useMediaQuery } from '@chakra-ui/react'
import { FiAlertOctagon } from 'react-icons/fi'
import { darken } from 'polished'

import { ModalConfirmProps } from './types'
import * as S from './styles'
import { theme } from '../../styles'

export const ModalConfirm = ({ name, isOpen, onClose, onConfirm }: ModalConfirmProps) => {

	const [isMobile] = useMediaQuery('(max-width: 768px)', {
		ssr: true,
		fallback: false
	})

    return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			isCentered
			size='2xl'
		>
			<ModalOverlay />
			<ModalContent
				backgroundColor={theme.colors.mainBg}
				marginX='3vw'
			>
				<ModalHeader
					display='flex'
					justifyContent='center'
					alignItems='center'
				>
					<FiAlertOctagon size={40} color={theme.colors.primary}/>
				</ModalHeader>
				<ModalCloseButton color={theme.colors.primary} onClick={onClose} size='lg' />
				<ModalBody
					display='flex'
					justifyContent='center'
					alignItems='center'
				>
					<S.Message>
						Você tem certeza que deseja alterar o status {name ? `do(a) ${name}` : 'dessa pessoa'}?
					</S.Message>
				</ModalBody>

				<ModalFooter
					display='flex'
					justifyContent='center'
					alignItems='center'
					gap={theme.spacings.xxsmall}
				>
					<Button
						onClick={onClose}
						paddingY={theme.spacings.xsmall}
						variant='solid'
						backgroundColor={theme.colors.primary}
						color={theme.colors.secondary}
						fontSize={isMobile ? theme.font.sizes.small : theme.font.sizes.medium}
						borderColor={theme.colors.primary}
						_hover={{
							backgroundColor: darken(0.1, theme.colors.primary),
							color: theme.colors.primaryText
						}}
						w='100%'
					>
						Não, Sair
					</Button>
					<Button
						paddingY={theme.spacings.xsmall}
						onClick={onConfirm}
						variant='outline'
						color={theme.colors.primary}
						fontSize={isMobile ? theme.font.sizes.small : theme.font.sizes.medium}
						borderColor={theme.colors.primary}
						_hover={{
							backgroundColor: darken(0.1, theme.colors.primary),
							color: theme.colors.primaryText
						}}
						w='100%'
					>
						Sim, Alterar
					</Button>
				</ModalFooter>
			</ModalContent>
        </Modal>
    )
}
