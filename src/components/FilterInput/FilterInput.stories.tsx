import type { Meta, StoryObj } from '@storybook/react';
import { FilterInput } from ".";

const meta: Meta<typeof FilterInput> ={
    title: 'FilterInput',
    component: FilterInput,
}
export default meta

type Story = StoryObj<typeof FilterInput>;

export const Basic: Story = {
    args: {
        
    }
}