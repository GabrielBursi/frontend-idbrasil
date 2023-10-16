'use client'

import React from 'react'
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { PiPlusBold } from 'react-icons/pi'
import { darken } from 'polished'

import { ModalCreateUserProps } from './types'
import * as S from './styles'
import { theme } from '../../styles'

export const ModalCreateUser = ({ isOpen }: ModalCreateUserProps) => {

	const { onClose } = useDisclosure()
	const [isMobile] = useMediaQuery('(max-width: 768px)', {
		ssr: true,
		fallback: false
	})


    return (
		<Modal
			closeOnOverlayClick={isOpen}
			isOpen={true}
			onClose={onClose}
			isCentered
			size='2xl'
		>
			<ModalOverlay />
			<ModalContent
				backgroundColor={theme.colors.mainBg}
				marginX='3vw'
			>
				<ModalHeader>
					<S.Title>
						Adicionar Pessoa
					</S.Title>
				</ModalHeader>
				<ModalCloseButton color={theme.colors.primary} onClick={onClose} />
				<ModalBody>
					<S.Form>
						<FormControl isRequired>
							<FormLabel
								color={theme.colors.primaryText}
								fontSize={theme.font.sizes.small}
							>
								Nome:
							</FormLabel>
							<Input 
								type='text' 
								name='nome' 
								id='nome' 
								placeholder='Nome Sobrenome' 
								fontSize={theme.font.sizes.medium}
								color={theme.colors.primaryText}
								paddingY={theme.spacings.xsmall}
								focusBorderColor={theme.colors.primary}
								autoComplete='off'
							/>
						</FormControl>
						<FormControl isRequired>
							<FormLabel
								color={theme.colors.primaryText}
								fontSize={theme.font.sizes.small}
							>
								CPF: 
							</FormLabel>
							<Input 
								type='text' 
								name='cpf' 
								id='cpf' 
								placeholder='xxx.xxx.xxx-xx' 
								fontSize={theme.font.sizes.medium}
								color={theme.colors.primaryText}
								paddingY={theme.spacings.xsmall}
								focusBorderColor={theme.colors.primary}
								autoComplete='off'
							/>
						</FormControl>
						<FormControl isRequired>
							<FormLabel
								color={theme.colors.primaryText}
								fontSize={theme.font.sizes.small}
							>
								Celular: 
							</FormLabel>
							<Input 
								type='text' 
								name='celular' 
								id='celular' 
								placeholder='(xx) xxxxx-xxxx' 
								fontSize={theme.font.sizes.medium}
								color={theme.colors.primaryText}
								paddingY={theme.spacings.xsmall}
								focusBorderColor={theme.colors.primary}
								autoComplete='off'
							/>
						</FormControl>
					</S.Form>
				</ModalBody>

				<ModalFooter>
					<Button
						onClick={onClose}
						paddingY={theme.spacings.xsmall}
						variant='solid'
						backgroundColor={theme.colors.primary}
						color={theme.colors.secondary}
						fontSize={isMobile ? theme.font.sizes.small : theme.font.sizes.medium}
						borderColor={theme.colors.primary}
						leftIcon={<PiPlusBold />}
						_hover={{
							backgroundColor: darken(0.1, theme.colors.primary),
							color: theme.colors.primaryText
						}}
						w='100%'
					>
						Adicionar Pessoa
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
    )
}
