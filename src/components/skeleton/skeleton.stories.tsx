import type { Meta, StoryObj } from "@storybook/react";
import SkeletonComponent from "./Skeleton";
import Stack from '@mui/material/Stack';

const meta: Meta<typeof SkeletonComponent> = {
    component: SkeletonComponent,
    title: 'Components/Skeleton',
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof meta>;


export const Base: Story = {
    render: (args) => (
        <Stack spacing={1} maxWidth={'50%'}>
            <SkeletonComponent variant='rounded' />
            <div style={{ width: '30px' }}>
                <SkeletonComponent variant='circular' />
            </div>
            <SkeletonComponent variant='rectangular' />
            <SkeletonComponent variant='text' />
        </Stack>
    )
}

export const Rounded: Story = {
    args: {
        variant: 'rounded'
    }
}