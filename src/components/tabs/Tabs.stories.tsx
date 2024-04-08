import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tabs, { TabProps } from './Tabs';
import Typography from '@mui/material/Typography';

const meta: Meta = {
    title: 'Components/Tabs',
    component: Tabs,
};

export default meta;

const Template: StoryFn<TabProps> = (args) => <Tabs {...args} />;

export const Base: StoryFn<TabProps> = () => (
    <div>
        <p style={{ textAlign: 'center' }}>Different colors</p>

        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '50px' }}>
            <div>
                <Tabs tabs={[
                    { label: 'Tab 1', content: 'Tab 1 Content' },
                    { label: 'Tab 2', content: 'Tab 2 Content' },
                    { label: 'Tab 3', content: 'Tab 3 Content' },
                ]}
                    color='primary' />
            </div>
            <div>
                <Tabs tabs={[
                    { label: 'Tab 1', content: 'Tab 1 Content' },
                    { label: 'Tab 2', content: 'Tab 2 Content' },
                    { label: 'Tab 3', content: 'Tab 3 Content' },
                ]}
                    color='secondary' />
            </div>
        </div>
        <div>

            <div>
                <p style={{ textAlign: 'center' }}>Display fullwidth</p>
                <Tabs tabs={[
                    { label: 'Tab 1', content: 'Tab 1 Content' },
                    { label: 'Tab 2', content: 'Tab 2 Content' },
                    { label: 'Tab 3', content: 'Tab 3 Content' },
                ]}
                    variant='fullWidth' />
            </div>
        </div>
    </div>

)

export const Basic = Template.bind({});
Basic.args = {
    tabs: [
        { label: 'Tab 1', content: 'Tab 1 Content' },
        { label: 'Tab 2', content: 'Tab 2 Content' },
        { label: 'Tab 3', content: 'Tab 3 Content' },
    ],
    color: 'primary',
    indicatorColor: 'secondary',
    variant: 'standard',
};
