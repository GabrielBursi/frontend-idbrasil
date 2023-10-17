import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { UserCard } from '.'

describe('<UserCard/>', () => {
    it('should render', () => {
        render(<UserCard/>)

        expect(screen.getByRole('heading', { name: /UserCard/i })).toBeInTheDocument()
    })
})
