import { screen } from '@testing-library/react'
import { render } from '../../utils'
import { ModalConfirm } from '.'

describe('<ModalConfirm/>', () => {
    it('should render', () => {
        render(<ModalConfirm/>)

        expect(screen.getByRole('heading', { name: /ModalConfirm/i })).toBeInTheDocument()
    })
})
