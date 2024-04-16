import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import Slider from './Slider'

export default {
    title: 'Components/Slider',
    component: Slider,
    tags: ['autodocs'],
} as Meta<typeof Slider>

export const Default: StoryFn<typeof Slider> = (props) => (
    <Slider {...props} />
)
