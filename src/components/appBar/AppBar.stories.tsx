import type { Meta, StoryFn } from "@storybook/react";
import * as React from 'react';
import AppBarComponent, { AppBarProps } from "./AppBar";

const meta: Meta<typeof AppBarComponent> = {
    component: AppBarComponent,
    title: 'Components/AppBar',
    tags: ['autodocs'],
}

export default meta;

export const Base: StoryFn = () => (
    <div style={{ display: 'block' }}>
        <div style={{ marginTop: '100px' }}>
            <AppBarComponent
                color="primary"
                position="static"
                showNotifications={true}
                showProfileMenu={true}
            />

        </div>
        <div style={{ marginTop: '100px' }}>
            <AppBarComponent
                color="secondary"
                position="fixed"
                showNotifications={true}
                showProfileMenu={true}
            />
        </div>
        <div style={{ marginTop: '100px' }}>
            <AppBarComponent
                color="default"
                position="sticky"
                showNotifications={false}
                showProfileMenu={true}
            />
        </div>


        <div style={{ marginTop: '100px' }}>
            <AppBarComponent
                color="default"
                position="sticky"
                showNotifications={false}
                showSearch={false}
            />
        </div>

        <div style={{ marginTop: '100px' }}>
            <AppBarComponent
                color="default"
                position="sticky"
                showNotifications={false}
                showSearch={false}
                showMenuIcon={false}
            />
        </div>
    </div>

);

export const Primary: StoryFn<Partial<AppBarProps>> = (args) => <AppBarComponent {...args} />;

Primary.args = {
    color: 'primary',
    position: 'static',
    title: 'MUI',
    logoSrc: '',
    showSearch: true,
    showNotifications: true,
    showProfileMenu: true,
    showMenuIcon: true,
};


