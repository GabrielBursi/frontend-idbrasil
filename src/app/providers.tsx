'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { GlobalStyles, theme } from '../styles'
import StyledComponentsRegistry from '../lib/registry'

export function Providers({ children }: PropsWithChildren) {

	const queryClient = new QueryClient()

	return (
		<>
			<QueryClientProvider client={queryClient}>
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
			</QueryClientProvider>
		</>
	)
}
