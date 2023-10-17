import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { ModalEditUser } from '.'

describe('<ModalEditUser/>', () => {
    it('should render', () => {
        render(<ModalEditUser/>)

        expect(screen.getByRole('heading', { name: /ModalEditUser/i })).toBeInTheDocument()
    })
})
