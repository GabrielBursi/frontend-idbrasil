import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { FilterInput } from '.'

describe('<FilterInput/>', () => {
    it('should render', () => {
        render(<FilterInput/>)

        expect(screen.getByRole('heading', { name: /FilterInput/i })).toBeInTheDocument()
    })
})
