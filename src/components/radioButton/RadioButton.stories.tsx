import { Meta, StoryFn } from '@storybook/react';
import RadioButton from './RadioButton';

export default {
    title: 'Components/RadioButton',
    tags: ['autodocs'],
    component: RadioButton,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['group', 'row-group', 'controlled-group', 'individual', 'size', 'color', 'error', 'placement', 'label-placement'],
            },
        },
        label: {
            control: 'text',
        },
        options: {
            control: 'array',
            table: {
                type: { summary: 'string[]' },
            },
        },
    },
} as Meta<typeof RadioButton>;


export const Base = () => (
    <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '200px' }}>
            <RadioButton
                type="group"
                label="Type group"
                options={['Female', 'Male', 'Other']}
            />
            <RadioButton
                type="row-group"
                label="Type row-group"
                options={['Female', 'Male', 'Other']}
            />

            <RadioButton
                type="controlled-group"
                label="Type controlled-group"
                options={['Female', 'Male']}
            />

            <RadioButton type="individual"
                label="individual" options={['A', 'B']} />

        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <RadioButton label="Sizes" type="size" options={['Small', 'Normal', 'Custom']} />
            <RadioButton
                label="colors"
                type="color"
                options={['Default', 'Pink', 'primary', 'warning', 'secondary']}
            />
            <RadioButton
                type="placement"
                options={['Top', 'Start', 'Bottom', 'End']}
            />
        </div>
    </div>
);

export const RadioWithValidation: StoryFn<typeof RadioButton> = (props) => (
    <RadioButton type="error" options={['Best', 'Worst']} row />
)

export const FormControlLabelPlacement: StoryFn<typeof RadioButton> = (props) => (
    <RadioButton
        type="placement"
        options={['Top', 'Start', 'Bottom', 'End']}
    />
);
