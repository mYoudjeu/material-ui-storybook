// Menu.stories.tsx
import type { Meta, StoryFn } from "@storybook/react";
import * as React from 'react';
import { BasicMenu, DenseMenu } from './Menu';

interface MenuStoryProps {
    bgcolor?: string;
    size?: 'small' | 'medium' | 'large';
}

const BasicMenuStory: StoryFn<MenuStoryProps> = ({ bgcolor }) => <BasicMenu bgcolor={bgcolor} />;
const DenseMenuStory: StoryFn<MenuStoryProps> = ({ bgcolor, size }) => <DenseMenu bgcolor={bgcolor} size={size} />;

export const BasicMenuComponent = BasicMenuStory.bind({});
export const DenseMenuComponent = DenseMenuStory.bind({});

export default {
    title: 'Components/Menu',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    argTypes: {
        bgcolor: { control: 'color' },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
    },
};
