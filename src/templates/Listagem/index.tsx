'use client'

import { Alert, AlertIcon, AlertTitle, Button, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { PiPlusBold } from 'react-icons/pi'
import { darken } from 'polished'

import * as S from './styles'
import { ListagemProps } from './types'

import { Container, FilterInput, ModalCreateUser, UsersList } from '@/components'
import { theme } from '@/styles'
import { useMyContext } from '@/context'

export const Listagem = ({ isLoading, users, error }: ListagemProps) => {

	const [isMobile] = useMediaQuery('(max-width: 768px)', {
		ssr: true,
		fallback: false
	})

	const { totalUsers } = useMyContext()

	const { onOpen, isOpen, onClose } = useDisclosure()

	return (
		<>
			<S.Listagem>
				<S.Banner>
					<S.Title>
						ID Brasil - Listagem Pessoas
					</S.Title>
				</S.Banner>
				<Container>
					<FilterInput />
					{error ?
						<S.Centralize>
							<Alert status='error'>
								<AlertIcon />
								<AlertTitle>{error}</AlertTitle>
							</Alert>
						</S.Centralize>
						:
						<UsersList users={users} isLoading={isLoading} />
					}
					<S.Centralize>
						<S.TotalText>
							Total de pessoas cadastradas: <S.TotalUsers>{totalUsers}</S.TotalUsers>
						</S.TotalText>
					</S.Centralize>
					<S.Centralize>
						<Button
							paddingY={theme.spacings.xsmall}
							variant='solid'
							backgroundColor={theme.colors.primary}
							color={theme.colors.secondary}
							fontSize={isMobile ? theme.font.sizes.small : theme.font.sizes.medium}
							borderColor={theme.colors.primary}
							leftIcon={<PiPlusBold />}
							type='button'
							onClick={onOpen}
							_hover={{
								backgroundColor: darken(0.1, theme.colors.primary),
								color: theme.colors.primaryText
							}}
							w={isMobile ? '100%' : 'auto'}
						>
							Adicionar Pessoa
						</Button>
					</S.Centralize>
					<S.Centralize as='footer'>
						<S.FooterText>
							© 2023 Powered by ID Brasil.
						</S.FooterText>
					</S.Centralize>
				</Container>
			</S.Listagem>
			<ModalCreateUser isOpen={isOpen} onClose={onClose}/>
		</>
	)
}
