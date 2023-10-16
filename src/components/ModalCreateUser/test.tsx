import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { ModalCreateUser } from '.'

describe('<ModalCreateUser/>', () => {
    it('should render', () => {
        render(<ModalCreateUser/>)

        expect(screen.getByRole('heading', { name: /ModalCreateUser/i })).toBeInTheDocument()
    })
})
