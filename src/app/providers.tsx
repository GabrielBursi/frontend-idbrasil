'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import { GlobalStyles, theme } from '../styles'
import StyledComponentsRegistry from '../lib/registry'

export function Providers({ children }: PropsWithChildren) {
	return (
		<>
			<CacheProvider>
				<ChakraProvider>
					<GlobalStyles />
					<StyledComponentsRegistry>
						<ThemeProvider theme={theme}>
							{children}
						</ThemeProvider>
					</StyledComponentsRegistry>
				</ChakraProvider>
			</CacheProvider>
		</>
	)
}
