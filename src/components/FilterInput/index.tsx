'use client'

import React, { useRef } from 'react'
import { Button, Input, InputGroup, InputRightElement, useMediaQuery } from '@chakra-ui/react'
import { FaFilter, FaSearch, FaTrash } from 'react-icons/fa'
import { darken } from 'polished'

import * as S from './styles'
import { theme } from '../../styles'
import { useMyContext } from '../../context'

export const FilterInput = () => {

	const [isMobile] = useMediaQuery('(max-width: 768px)', {
		ssr: true,
		fallback: false
	})

	const inputRef = useRef<HTMLInputElement | null>(null);

	const { filterUsersAccordingInput, errorMessage, getAllUsers, users } = useMyContext()

	const filter = () => {
		if (!inputRef.current) return
		else if (inputRef.current.value === '') return
		else if (errorMessage) return
		else if (!users.length) return
		else {
			filterUsersAccordingInput(inputRef.current.value)
		}
	}

	const clean = () => {
		if (inputRef.current) {
			inputRef.current.value = '';
			inputRef.current.focus()
			getAllUsers()
		}
	};

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
					ref={inputRef}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							filter()
						}
					}}
				/>
				<InputRightElement paddingY={theme.spacings.xsmall}>
					<FaSearch color={theme.colors.primary} size={15} />
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
					onClick={filter}
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
					onClick={clean}
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
