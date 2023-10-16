import type { Meta, StoryObj } from '@storybook/react';
import { ModalCreateUser } from ".";

const meta: Meta<typeof ModalCreateUser> ={
    title: 'ModalCreateUser',
    component: ModalCreateUser,
}
export default meta

type Story = StoryObj<typeof ModalCreateUser>;

export const Basic: Story = {
    args: {
        
    }
}