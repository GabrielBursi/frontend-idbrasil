import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { PaginaInicial } from '.'

describe('<PaginaInicial/>', () => {
    it('should render', () => {
        render(<PaginaInicial/>)

		expect(screen.getByRole('heading', { name: /ID Brasil Sistemas/i })).toBeInTheDocument()
		expect(screen.getByRole('paragraph', { name: /aplicação para teste frontend/i })).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /acessar/i })).toBeInTheDocument()
    })
})
