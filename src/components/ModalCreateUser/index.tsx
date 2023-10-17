'use client'

import React, { useEffect } from 'react'
import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
	useMediaQuery
} from '@chakra-ui/react'
import { PiPlusBold } from 'react-icons/pi'
import { darken } from 'polished'

import { ModalCreateUserProps } from './types'
import * as S from './styles'
import { theme } from '../../styles'
import { CreateUserData, useCreateUser } from '../../hooks'

export const ModalCreateUser = ({ isOpen }: ModalCreateUserProps) => {

	const { onClose } = useDisclosure()
	const [isMobile] = useMediaQuery('(max-width: 768px)', {
		ssr: true,
		fallback: false
	})

	const { handleSubmit, register, hasErrors, isSubmitting, errors, reset, clearErrors, formRef } = useCreateUser()

	useEffect(() => {
		clearErrors()
		reset()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	const onSubmit = (data: CreateUserData) => {
		console.log(data)
	}

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
				<ModalCloseButton color={theme.colors.primary} onClick={onClose} size='lg'/>
				<ModalBody>
					<S.Form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
						<FormControl isRequired isInvalid={!!errors.name}>
							<FormLabel
								color={theme.colors.primaryText}
								fontSize={theme.font.sizes.small}
							>
								Nome:
							</FormLabel>
							<Input
								type='text'
								id='nome'
								placeholder='Nome Sobrenome'
								fontSize={theme.font.sizes.medium}
								color={theme.colors.primaryText}
								paddingY={theme.spacings.xsmall}
								focusBorderColor={theme.colors.primary}
								autoComplete='off'
								autoFocus
								{...register('name')}
								onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    formRef.current!.dispatchEvent(
                                        new Event("submit", { cancelable: true, bubbles: true })
                                    );
                                }
                            }}
							/>
							{errors.name?.message && <FormErrorMessage fontSize={theme.font.sizes.xsmall}>{errors.name.message}</FormErrorMessage>}
						</FormControl>
						<FormControl isRequired isInvalid={!!errors.cpf}>
							<FormLabel
								color={theme.colors.primaryText}
								fontSize={theme.font.sizes.small}
							>
								CPF:
							</FormLabel>
							<Input
								type='text'
								id='cpf'
								maxLength={15}
								placeholder='xxx.xxx.xxx-xx'
								fontSize={theme.font.sizes.medium}
								color={theme.colors.primaryText}
								paddingY={theme.spacings.xsmall}
								focusBorderColor={theme.colors.primary}
								autoComplete='off'
								{...register('cpf')}
								onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    formRef.current!.dispatchEvent(
                                        new Event("submit", { cancelable: true, bubbles: true })
                                    );
                                }
                            }}
							/>
							{errors.cpf?.message && <FormErrorMessage fontSize={theme.font.sizes.xsmall}>{errors.cpf.message}</FormErrorMessage>}
						</FormControl>
						<FormControl isRequired isInvalid={!!errors.celular}>
							<FormLabel
								color={theme.colors.primaryText}
								fontSize={theme.font.sizes.small}
							>
								Celular:
							</FormLabel>
							<Input
								type='text'
								id='celular'
								placeholder='(xx) xxxxx-xxxx'
								maxLength={12}
								fontSize={theme.font.sizes.medium}
								color={theme.colors.primaryText}
								paddingY={theme.spacings.xsmall}
								focusBorderColor={theme.colors.primary}
								autoComplete='off'
								{...register('celular')}
								onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    formRef.current!.dispatchEvent(
                                        new Event("submit", { cancelable: true, bubbles: true })
                                    );
                                }
                            }}
							/>
							{errors.celular?.message && <FormErrorMessage fontSize={theme.font.sizes.xsmall}>{errors.celular.message}</FormErrorMessage>}
						</FormControl>
					</S.Form>
				</ModalBody>

				<ModalFooter>
					<Button
						paddingY={theme.spacings.xsmall}
						variant='solid'
						backgroundColor={theme.colors.primary}
						color={theme.colors.secondary}
						fontSize={isMobile ? theme.font.sizes.small : theme.font.sizes.medium}
						borderColor={theme.colors.primary}
						leftIcon={<PiPlusBold />}
						disabled={hasErrors}
						isLoading={isSubmitting}
						type='submit'
						w='100%'
						_hover={{
							backgroundColor: darken(0.1, theme.colors.primary),
							color: theme.colors.primaryText
						}}
						onClick={() => {
							formRef.current!.dispatchEvent(
								new Event("submit", { cancelable: true, bubbles: true })
							);
							onClose()
						}}
					>
						Adicionar Pessoa
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
    )
}
