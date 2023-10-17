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
	useMediaQuery,
	Skeleton,
	Stack,
	Badge,
	RadioGroup,
	Radio
} from '@chakra-ui/react'
import { darken, lighten } from 'polished'

import { ModalEditUserProps } from './types'
import * as S from './styles'
import { theme } from '../../styles'
import { EditUserData, useEditUser } from '../../hooks'

export const ModalEditUser = ({ user, isLoading = false, isOpen }: ModalEditUserProps) => {

	const { onClose } = useDisclosure()
	const [isMobile] = useMediaQuery('(max-width: 768px)', {
		ssr: true,
		fallback: false
	})

	const { handleSubmit, register, hasErrors, isSubmitting, errors, reset, clearErrors, formRef, setValue } = useEditUser()

	useEffect(() => {
		clearErrors()
		reset()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	useEffect(() => {
		if (user) {
			setValue('name', user.nome)
			setValue('cpf', user.cpf)
			setValue('celular', user.telefone)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	const onSubmit = (data: EditUserData) => {
		console.log(data)
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
						Editar Pessoa
					</S.Title>
				</ModalHeader>
				<ModalCloseButton color={theme.colors.primary} onClick={onClose} size='lg' />
				<ModalBody>
					<S.Form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
						<FormControl isInvalid={!!errors.name}>
							<FormLabel
								color={theme.colors.primaryText}
								fontSize={theme.font.sizes.small}
							>
								Nome:
							</FormLabel>
							<Skeleton
								isLoaded={!isLoading}
								startColor={theme.colors.primary}
								endColor={lighten(0.1, theme.colors.secondary)}
							>
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
							</Skeleton>
							{errors.name?.message && <FormErrorMessage fontSize={theme.font.sizes.xsmall}>{errors.name.message}</FormErrorMessage>}
						</FormControl>
						<FormControl isInvalid={!!errors.cpf}>
							<FormLabel
								color={theme.colors.primaryText}
								fontSize={theme.font.sizes.small}
							>
								CPF:
							</FormLabel>
							<Skeleton
								isLoaded={!isLoading}
								startColor={theme.colors.primary}
								endColor={lighten(0.1, theme.colors.secondary)}
							>
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
							</Skeleton>
							{errors.cpf?.message && <FormErrorMessage fontSize={theme.font.sizes.xsmall}>{errors.cpf.message}</FormErrorMessage>}
						</FormControl>
						<FormControl isInvalid={!!errors.celular}>
							<FormLabel
								color={theme.colors.primaryText}
								fontSize={theme.font.sizes.small}
							>
								Celular:
							</FormLabel>
							<Skeleton
								isLoaded={!isLoading}
								startColor={theme.colors.primary}
								endColor={lighten(0.1, theme.colors.secondary)}
							>
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
							</Skeleton>
							{errors.celular?.message && <FormErrorMessage fontSize={theme.font.sizes.xsmall}>{errors.celular.message}</FormErrorMessage>}
						</FormControl>
						<FormControl isInvalid={!!errors.ativo}>
							<FormLabel
								color={theme.colors.primaryText}
								fontSize={theme.font.sizes.small}
							>
								Status:
							</FormLabel>
							<Skeleton
								isLoaded={!isLoading}
								startColor={theme.colors.primary}
								endColor={lighten(0.1, theme.colors.secondary)}
							>
								<Stack direction='row' spacing={theme.spacings.xxsmall}>
									<Badge
										colorScheme={user?.ativo ? 'green' : 'red'}
										size='lg'
										fontSize={theme.font.sizes.xsmall}
									>
										{user?.ativo ? 'ATIVO' : 'DESATIVO'}
									</Badge>
									<RadioGroup
										defaultValue={user?.ativo ? 'ativado' : 'desativado'}
										color={theme.colors.primaryText}
									>
										<Stack
											direction='row'
											spacing={theme.spacings.xxsmall}
										>
											<Radio
												size='lg'
												colorScheme='red'
												value='desativado'
											>
												Desativar
											</Radio>
											<Radio
												size='lg'
												colorScheme='green'
												value='ativado'
											>
												Ativar
											</Radio>
										</Stack>
									</RadioGroup>
								</Stack>
							</Skeleton>
							{errors.ativo?.message && <FormErrorMessage fontSize={theme.font.sizes.xsmall}>{errors.ativo.message}</FormErrorMessage>}
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
						disabled={hasErrors || isLoading || !user}
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
						Confirmar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}