import type { Meta, StoryObj } from '@storybook/react';
import { UserCard } from ".";

const meta: Meta<typeof UserCard> ={
    title: 'UserCard',
    component: UserCard,
	args: {
		user: {
			nome: 'gabriel bursi',
			telefone: '44 9988-1155',
			cpf: '090.931.239-71',
			id: 1,
			ativo: true
		}
	}
}
export default meta

type Story = StoryObj<typeof UserCard>;

export const Basic: Story = {
    args: {

    }
}
