import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { UsersList } from '.'

describe('<UsersList/>', () => {
    it('should render', () => {
        render(<UsersList/>)

        expect(screen.getByRole('heading', { name: /UsersList/i })).toBeInTheDocument()
    })
})
