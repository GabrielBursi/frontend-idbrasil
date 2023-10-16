import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { Main } from '.'

describe('<Main/>', () => {
    it('should render', () => {
        render(<Main/>)

		expect(screen.getByRole('heading', { name: /Main/i })).toBeInTheDocument()
    })
})
