'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from '../styles'
import StyledComponentsRegistry from '../lib/registry'

export function Providers({ children }: PropsWithChildren) {
	return (
		<>
			<GlobalStyles />
			<StyledComponentsRegistry>
				<ThemeProvider theme={theme}>
					{children}
				</ThemeProvider>
			</StyledComponentsRegistry>
		</>
	)
}
