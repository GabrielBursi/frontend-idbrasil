import { ReactElement } from 'react'
import { RenderOptions, render } from '@testing-library/react'
import { Providers } from '../app/providers'

const customRender = (
	ui: ReactElement | JSX.Element,
	options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export { customRender as render }
