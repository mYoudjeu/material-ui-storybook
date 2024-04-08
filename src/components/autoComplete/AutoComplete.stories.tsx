import type { Meta, StoryObj } from "@storybook/react";
import AutoComplete from "./AutoComplete";

const meta: Meta<typeof AutoComplete> = {
    component: AutoComplete,
    title: 'Components/AutoComplete',
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    render: () => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ width: '300px' }}>
                <AutoComplete disableCloseOnSelect />
                <AutoComplete clearOnEscape />
                <AutoComplete autoHighlight />

            </div>
            <div style={{ width: '300px' }}>
                <AutoComplete autoSelect />
                <AutoComplete disabled />
                <AutoComplete readOnly />

            </div>
        </div>
    )
}


export const AutoCompleteWithIcon: Story = {
    args: {
        autoComplete: true,
        autoCompleteWithIcon: true

    }
}


