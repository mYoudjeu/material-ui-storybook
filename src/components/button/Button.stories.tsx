import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import { CircularProgress } from '@mui/material';

interface ButtonStoryProps extends ButtonProps {
    isLoading?: boolean;
}

export default {
    component: Button,
    title: 'Components/Button',
} as Meta;

export const Base: StoryFn<ButtonStoryProps> = () => (
    <div>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
            <Button label="Button" variant="contained" isDisabled />
            <Button label="Button" variant="outlined" size="small" />
            <Button label="Button" variant="contained" size="small" />
            <Button label="Button" variant="text" size="small" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
            <Button label="Button" variant="contained" isDisabled size="medium" />
            <Button label="Button" variant="outlined" size="medium" />
            <Button label="Button" variant="contained" size="medium" />
            <Button label="Button" variant="text" size="medium" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
            <Button label="Button" variant="contained" isDisabled size="large" />
            <Button label="Button" variant="outlined" size="large" />
            <Button label="Button" variant="contained" size="large" />
            <Button label="Button" variant="text" size="large" />
        </div>
    </div>
);

export const WithLoadingState: StoryFn<ButtonStoryProps> = (args) => (
    <Button {...args}>
        {args.isLoading ? <CircularProgress size={24} color="inherit" /> : args.label}
    </Button>
);
WithLoadingState.args = {
    isLoading: true,
};
