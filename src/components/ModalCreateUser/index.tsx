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
	useMediaQuery,
	useToast
} from '@chakra-ui/react'
import { PiPlusBold } from 'react-icons/pi'
import { darken } from 'polished'
import InputMask from 'react-input-mask';

import { ModalCreateUserProps } from './types'
import * as S from './styles'
import { theme } from '../../styles'
import { CreateUserData, useCreateUser } from '../../hooks'
import { UserServices } from '../../api/services'
import { useMyContext } from '../../context'

export const ModalCreateUser = ({ isOpen, onClose }: ModalCreateUserProps) => {

	const { setUsers, setTotalUsers } = useMyContext()
	const { handleSubmit, register, hasErrors, isSubmitting, errors, reset, clearErrors, formRef } = useCreateUser()

	const [isMobile] = useMediaQuery('(max-width: 768px)', {
		ssr: true,
		fallback: false
	})
	const toast = useToast()

	useEffect(() => {
		clearErrors()
		reset()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	const onSubmit = async (data: CreateUserData) => {

		const newUser = await UserServices.Create({ cpf: data.cpf, ativo: true, nome: data.name, telefone: data.celular })

		if (newUser instanceof Error) {
			toast({
				title: 'Ocorreu algum erro ao tentar criar pessoa.',
				description: `${newUser.message}`,
				status: 'error',
				duration: 5000,
				isClosable: true,
				position: 'top-right'
			})
			return
		}

		setUsers(old => [...old, newUser])
		setTotalUsers(old => old + 1)

		toast({
			title: 'Pessoa criada com sucesso.',
			description: `${newUser.nome} - ${newUser.cpf}`,
			status: 'success',
			duration: 5000,
			isClosable: true,
			position: 'top-right'
		})
		onClose()
	}

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
				<ModalHeader>
					<S.Title>
						Adicionar Pessoa
					</S.Title>
				</ModalHeader>
				<ModalCloseButton color={theme.colors.primary} onClick={onClose} size='lg' />
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
								{...register('name')}
								type='text'
								id='nome'
								placeholder='Nome Sobrenome'
								fontSize={theme.font.sizes.medium}
								color={theme.colors.primaryText}
								paddingY={theme.spacings.xsmall}
								focusBorderColor={theme.colors.primary}
								autoComplete='off'
								autoFocus
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
								{...register('cpf')}
								as={InputMask}
								mask='999.999.999-99'
								maskChar={null}
								type='text'
								id='cpf'
								maxLength={15}
								placeholder='xxx.xxx.xxx-xx'
								fontSize={theme.font.sizes.medium}
								color={theme.colors.primaryText}
								paddingY={theme.spacings.xsmall}
								focusBorderColor={theme.colors.primary}
								autoComplete='off'
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
								{...register('celular')}
								as={InputMask}
								mask='99 9999-9999'
								maskChar={null}
								type='text'
								id='celular'
								placeholder='(xx) xxxxx-xxxx'
								maxLength={12}
								fontSize={theme.font.sizes.medium}
								color={theme.colors.primaryText}
								paddingY={theme.spacings.xsmall}
								focusBorderColor={theme.colors.primary}
								autoComplete='off'
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
						}}
					>
						Adicionar Pessoa
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
