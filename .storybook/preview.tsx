import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '../src/styles'

export const decorators = [
	withThemeFromJSXProvider({
		themes: {
			light: theme,
		},
		GlobalStyles,
		Provider: ThemeProvider,
	}),
];

export const parameters = {
	chakra: {
		theme,
	},
}
