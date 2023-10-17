import type { Meta, StoryObj } from '@storybook/react';
import { ModalEditUser } from ".";

const meta: Meta<typeof ModalEditUser> ={
    title: 'ModalEditUser',
    component: ModalEditUser,
	args: {
		isOpen: true
	}
}
export default meta

type Story = StoryObj<typeof ModalEditUser>;

export const Basic: Story = {
    args: {

    }
}

export const Loading: Story = {
	args: {
		isLoading: true
	}
}

export const WithUser: Story = {
	args: {
		user: {
			nome: 'Gabriel',
			telefone: '44 9988-1155',
			ativo: true,
			cpf: '090.931.239-71',
			id: 1
		}
	}
}

