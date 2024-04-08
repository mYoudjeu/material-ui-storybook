import type { Meta, StoryObj } from "@storybook/react";
import AlertComponent from "./Alert";

const meta: Meta<typeof AlertComponent> = {
    component: AlertComponent,
    title: 'Components/Alert',
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    render: () => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
                <AlertComponent severity="success" label="Success Alert" />
                <AlertComponent severity="info" label="Info Alert" />
                <AlertComponent severity="warning" label="Warning Alert" />
                <AlertComponent severity="error" label="Error Alert" />
            </div>
            <div>
                <AlertComponent variant="filled" actionButtonLabel="undo" />
                <AlertComponent variant="outlined" label="Outlined Alert" />
                <AlertComponent icon label="No Icon Alert" />
                <AlertComponent label="Alert with title" alertTitle="Success" />

            </div>
        </div>
    )
}

export const alert_with_Transition_and_Sound: Story = {
    args: {
        soundAlert: true,
        label: 'Click the close icon to liste to the alert sound!'

    }
}


export const alert_with_Transition: Story = {
    args: {
        transAlert: true,
        variant: 'filled',
        label: 'Click the close icon to see the Collapse transition in action!'
    }
}

