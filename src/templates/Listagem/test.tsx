import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { Listagem } from '.'

describe('<Listagem/>', () => {
    it('should render', () => {
        render(<Listagem/>)

        expect(screen.getByRole('heading', { name: /Listagem/i })).toBeInTheDocument()
    })
})
