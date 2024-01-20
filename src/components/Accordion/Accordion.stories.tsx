//import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Accordion2} from "./Accordion";
import React, {useState} from "react";

/*
const meta: Meta<typeof Accordion2> = {
    component: Accordion2,
};

export default meta;

type Story = StoryObj<typeof Accordion2>;
*/

/*
export const FirstAccordion: Story = {
    args: {
        titleValue: "HI",
        collapsed: true,
        onChange: () => {},
        }
}
*/

export default {
    title: 'Accordion',
    component: Accordion2
}

const onChangeHandler = action('collapsed or no')


export const CollapsedAccordion = () => {
    return <Accordion2 titleValue={'Collapsed Accordion'}
                       collapsed={true}
                       onChange={onChangeHandler}/>
}

export const OpenedAccordion = () => {
    return <Accordion2 titleValue={'Opened Accordion'}
                       collapsed={false}
                       onChange={onChangeHandler}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(true)
    return <Accordion2 titleValue={'Accordion'}
                       collapsed={collapsed}
                       onChange={() => setCollapsed(!collapsed)}/>
}