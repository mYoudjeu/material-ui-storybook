import React from 'react';
import { Tabs as MuiTabs, Tab, Typography } from '@mui/material';

export interface TabProps {
    /**
     * An array of objects representing tabs.
     * Each object should have a 'label' property for tab label and a 'content' property for tab content.
     */
    tabs: Array<{ label: string; content: string }>;

    /**
     * The color scheme of the tabs.
     */
    color?: 'primary' | 'secondary' | 'inherit';

    /**
     * The color of the tab indicator.
     */
    indicatorColor?: 'secondary' | 'primary';

    /**
     * The variant of the tabs.
     */
    variant?: 'standard' | 'scrollable' | 'fullWidth';
}


const Tabs: React.FC<TabProps> = ({ tabs, color, indicatorColor, variant }) => {
    // State to manage the index of the selected tab
    const [selectedTab, setSelectedTab] = React.useState(0);
    // Function to handle tab change
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setSelectedTab(newValue);
    };

    // Render the Tabs component
    return (
        <>
            <MuiTabs value={selectedTab} onChange={handleChange} variant={variant} textColor={color} indicatorColor={indicatorColor}>
                {tabs.map((tab, index) => (
                    <Tab key={index} label={tab.label} />
                ))}
            </MuiTabs>
            <Typography>{tabs[selectedTab]?.content}</Typography>
        </>
    );
};

export default Tabs;
