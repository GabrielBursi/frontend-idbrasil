import type { Meta, StoryObj } from '@storybook/react';
import { UsersList } from ".";

import { usersMock } from './mock';
import { Container } from '..';
import { theme } from '../../styles';

const meta: Meta<typeof UsersList> ={
    title: 'UsersList',
    component: UsersList,
	args: {
		users: usersMock
	},
	parameters: {
		layout: 'fullscreen',
	},
	render: (args) => (
		<div style={{ backgroundColor: theme.colors.mainBg }}>
			<Container>
				<UsersList {...args}/>
			</Container>
		</div>
	)
}
export default meta

type Story = StoryObj<typeof UsersList>;

export const Basic: Story = {
    args: {

    }
}

export const Empty: Story = {
	args: {
		users: []
	}
}

export const Loading: Story = {
	args: {
		users: [],
		isLoading: true
	}
}
