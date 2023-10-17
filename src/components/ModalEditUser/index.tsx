'use client'

import React, { useEffect, useState } from 'react'
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
	Skeleton,
	Stack,
	Badge,
	RadioGroup,
	Radio,
	useToast,
	useDisclosure
} from '@chakra-ui/react'
import { darken, lighten } from 'polished'

import { ModalEditUserProps } from './types'
import * as S from './styles'
import { theme } from '../../styles'
import { EditUserData, Status, useEditUser } from '../../hooks'
import { UserServices } from '@/api/services'
import { ModalConfirm } from '..'
import { Controller } from 'react-hook-form'

export const ModalEditUser = ({ user, isLoading = false, isOpen, onClose }: ModalEditUserProps) => {
	const [userSelected, setUserSelected] = useState<EditUserData>();

	const [isMobile] = useMediaQuery('(max-width: 768px)', {
		ssr: true,
		fallback: false
	})
	const toast = useToast()
	const { onClose: onCloseModalConfirm, isOpen: isOpenModalConfirm, onOpen: onOpenModalConfirm } = useDisclosure()

	const { handleSubmit, register, hasErrors, isSubmitting, errors, reset, clearErrors, formRef, setValue, control } = useEditUser()

	useEffect(() => {
		clearErrors()
		reset()
		if (user) {
			setValue('name', user.nome)
			setValue('cpf', user.cpf)
			setValue('celular', user.telefone)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	const onSubmit = async (data: EditUserData) => {

		if (statusToBool(data.ativo) !== user?.ativo) {
			setUserSelected(data)
			onClose()
			onOpenModalConfirm()
			return
		}

		const userUpdated = await UserServices.Update(user.id, { cpf: data.cpf, nome: data.name, telefone: data.celular })

		if (userUpdated instanceof Error) {
			toast({
				title: 'Ocorreu algum erro ao tentar editar pessoa.',
				description: `${userUpdated?.message}`,
				status: 'error',
				duration: 5000,
				isClosable: true,
				position: 'top-right'
			})
			return
		}

		closeModalSuccess(onClose)
	}

	const confirmChangeStatus = async () => {

		const [userUpdated, userStatusUpdated] = await Promise.all([
			UserServices.Update(user!.id, { cpf: userSelected?.cpf, nome: userSelected?.name, telefone: userSelected?.celular }),
			UserServices.UpdateStatus(user!.id, { ativo: userSelected?.ativo === Status.ativar })
		])

		if (userUpdated instanceof Error || userStatusUpdated instanceof Error) {
			toast({
				title: 'Ocorreu algum erro ao tentar editar pessoa.',
				description: `${userUpdated?.message ?? userStatusUpdated?.message}`,
				status: 'error',
				duration: 5000,
				isClosable: true,
				position: 'top-right'
			})
			return
		}

		closeModalSuccess(onCloseModalConfirm)
	}

	const statusToBool = (status: Status): boolean => {
		return status === Status.ativar;
	};

	const closeModalSuccess = (onClose: () => void) => {
		toast({
			title: 'Pessoa editada com sucesso.',
			status: 'success',
			duration: 5000,
			isClosable: true,
			position: 'top-right'
		})

		onClose()
	}

	return (
		<>
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
										<Controller
											name="ativo"
											control={control}
											render={({ field: { onChange, value } }) => (
												<RadioGroup
													onChange={onChange}
													value={value}
													defaultValue={user?.ativo ? Status.ativar : Status.desativar}
													color={theme.colors.primaryText}
												>
													<Stack
														direction='row'
														spacing={theme.spacings.xxsmall}
													>
														<Radio
															size='lg'
															colorScheme='red'
															value={Status.desativar}
														>
															{Status.desativar}
														</Radio>
														<Radio
															size='lg'
															colorScheme='green'
															value={Status.ativar}
														>
															{Status.ativar}
														</Radio>
													</Stack>
												</RadioGroup>
											)}
										/>
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
							type='button'
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
							Confirmar
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
			<ModalConfirm isOpen={isOpenModalConfirm} onClose={onCloseModalConfirm} name={user!.nome} onConfirm={confirmChangeStatus}/>
		</>
	)
}
