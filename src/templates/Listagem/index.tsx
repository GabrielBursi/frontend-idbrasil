'use client'

import { Button, useMediaQuery } from '@chakra-ui/react'
import { PiPlusBold } from 'react-icons/pi'
import { darken } from 'polished'

import * as S from './styles'

import { Container, FilterInput, UsersList } from '@/components'
import { theme } from '@/styles'
import { usersMock } from '@/components/UsersList/mock'

export const Listagem = () => {

	const [isMobile] = useMediaQuery('(max-width: 768px)', {
		ssr: true,
		fallback: false
	})

	const users = usersMock

	return (
		<S.Listagem>
			<S.Banner>
				<S.Title>
					ID Brasil - Listagem Pessoas
				</S.Title>
			</S.Banner>
			<Container>
				<FilterInput />
				<UsersList users={users} />
				<S.Centralize>
					<S.TotalText>
						Total de pessoas cadastradas: <S.TotalUsers>{users.length}</S.TotalUsers>
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
						type='submit'
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
	)
}
