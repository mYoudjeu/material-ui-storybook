import React from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import Dialog, { DialogProps } from './Dialog';
import { type } from "os";

const meta: Meta = {
    title: 'Components/Dialog',
    component: Dialog,
};

export default meta;


type Story = StoryObj<typeof meta>;

export const Base: StoryFn<DialogProps> = () => (
    <div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
                <Dialog open title='Draggable Dialog' content='Dialog Content' primaryButtonText='Confirm' secondaryButtonText='Cancel' draggable />
            </div>
            <div>
                <Dialog open title=' OpenMaxWidth Dialog' content='Dialog Content' primaryButtonText='Confirm' secondaryButtonText='Cancel' slideIn openMaxWidth='sm' />
            </div>

        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '100px' }}>
            <div>
                <Dialog open title='Simple Dialog' content='Dialog Content' primaryButtonText='Confirm' secondaryButtonText='Cancel' />
            </div>
            <div>
                <Dialog open title=' SlideIn Dialog' content='Dialog Content' primaryButtonText='Confirm' secondaryButtonText='Cancel' slideIn />
            </div>
            <div>
                <Dialog open title='OpenFullScreen Dialog' content='Dialog Content' primaryButtonText='Confirm' secondaryButtonText='Cancel' openFullScreen />
            </div>
        </div>
    </div>

);

export const Basic: Story = {
    args: {
        title: 'Dialog Title',
        content: 'Dialog Content',
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel',
    },
}
