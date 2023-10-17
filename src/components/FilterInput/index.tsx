'use client'

import React from 'react'
import { Button, Input, InputGroup, InputRightElement, useMediaQuery } from '@chakra-ui/react'
import { FaFilter, FaSearch, FaTrash } from 'react-icons/fa'
import { darken } from 'polished'

import * as S from './styles'
import { theme } from '../../styles'

export const FilterInput = () => {

	const [isMobile] = useMediaQuery('(max-width: 768px)', {
		ssr: true,
		fallback: false
	})

	return (
		<S.FilterInput>
			<S.Title>
				pesquisa multipla
			</S.Title>
			<InputGroup>
				<Input
					borderColor={theme.colors.primary}
					paddingY={theme.spacings.xsmall}
					fontSize={theme.font.sizes.medium}
					color={theme.colors.primaryText}
					backgroundColor={darken(0.6, theme.colors.secondaryText)}
					placeholder='Digite o nome ou o telefone da pessoa procurada'
				/>
				<InputRightElement paddingY={theme.spacings.xsmall}>
					<FaSearch color={theme.colors.primary} size={15}/>
				</InputRightElement>
			</InputGroup>
			<S.ButtonContainer>
				<Button
					leftIcon={<FaFilter />}
					size='lg'
					fontSize={theme.font.sizes.small}
					borderColor={theme.colors.primary}
					variant='solid'
					backgroundColor={theme.colors.primary}
					color={theme.colors.secondary}
					_hover={{
						backgroundColor: darken(0.1, theme.colors.primary),
						color: theme.colors.primaryText
					}}
					w={isMobile ? '100%' : 'auto'}
				>
					Filtrar
				</Button>
				<Button
					leftIcon={<FaTrash />}
					size='lg'
					variant='outline'
					fontSize={theme.font.sizes.small}
					borderColor={theme.colors.primary}
					color={theme.colors.primary}
					_hover={{
						backgroundColor: darken(0.1, theme.colors.primary),
						color: theme.colors.primaryText
					}}
					w={isMobile ? '100%' : 'auto'}
				>
					Limpar
				</Button>
			</S.ButtonContainer>
		</S.FilterInput>
	)
}
