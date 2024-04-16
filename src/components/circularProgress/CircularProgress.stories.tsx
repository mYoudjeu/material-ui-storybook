import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import CircularProgress from './CircularProgress'

export default {
    title: 'Components/CircularProgress',
    component: CircularProgress,
    tags: ['autodocs'],
} as Meta<typeof CircularProgress>

export const Default: StoryFn<typeof CircularProgress> = (props) => (
    <CircularProgress {...props} />
)
