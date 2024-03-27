import type { Meta, StoryObj } from "@storybook/react";
import CardNew from "./Card";

const meta: Meta<typeof CardNew> = {
    component: CardNew,
    title: 'Card',
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {

    }
}