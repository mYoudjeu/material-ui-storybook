import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { type } from "os";
const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Button',
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const outlined: Story = {
    args: {
        variant: 'outlined',
        label: 'hello',

    }
}

export const text: Story = {
    args: {
        variant: 'text',
        label: 'hello',

    }
}

export const small: Story = {
    args: {
        size: 'small',

    }
}
export const large: Story = {
    args: {
        size: 'large',

    }
}

export const With_different_variants: Story = {
    render: (args) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button label="Button" variant="contained" size="medium" />
            <Button label="Button" variant="outlined" size="medium" />
        </div>
    )
}

export const With_different_sizes: Story = {
    render: (args) => (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
                <Button label="Button" variant="contained" size="small" />
                <Button label="Button" variant="contained" size="medium" />
                <Button label="Button" variant="contained" size="large" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button label="Button" variant="outlined" size="small" />
                <Button label="Button" variant="outlined" size="medium" />
                <Button label="Button" variant="outlined" size="large" />
            </div>
        </div>

    )
}

export const With_different_states: Story = {
    render: (args) => (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
                <Button label="Button" variant="contained" isDisabled />
            </div>
        </div>

    )
}

