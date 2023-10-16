import type { Meta, StoryObj } from '@storybook/react';
import { ModalConfirm } from ".";

const meta: Meta<typeof ModalConfirm> ={
    title: 'ModalConfirm',
    component: ModalConfirm,
	args: {
		isOpen: true
	}
}
export default meta

type Story = StoryObj<typeof ModalConfirm>;

export const Basic: Story = {
    args: {
		name: 'Gabriel'
    }
}
