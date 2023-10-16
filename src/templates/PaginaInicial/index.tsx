'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { PiGearBold } from 'react-icons/pi'
import { useMediaQuery } from '@chakra-ui/react'

import * as S from './styles'

export const PaginaInicial = () => {

	const [isMobile] = useMediaQuery('(max-width: 768px)', {
		ssr: true,
		fallback: false
	})

	const { push } = useRouter()

    return (
        <S.PaginaInicial>
            <S.Content>
				<S.IconContainer>
					<PiGearBold size={isMobile ? 50 : 70} color='white'/>
				</S.IconContainer>
				<S.TextContent>
					<S.Title>
						ID Brasil Sistemas
					</S.Title>
					<S.SubTitle>
						Aplicação para teste de Frontend
					</S.SubTitle>
				</S.TextContent>
				<S.Button onClick={() => push('/listagem')}>
					Acessar
				</S.Button>
			</S.Content>
        </S.PaginaInicial>
    )
}
