import type { Meta, StoryObj } from "@storybook/react";
import AlertComponent from "./Alert";

const meta: Meta<typeof AlertComponent> = {
    component: AlertComponent,
    title: 'Alert',
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        severity: 'success'
    }
}

export const alert_with_variants: Story = {
    args: {
        variant: 'filled'
    }
}