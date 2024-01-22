//import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Accordion2} from "./Accordion";
import React, {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion2
}

const onChangeHandler = action('collapsed or no')

export const CollapsedAccordion = () => {
    return <Accordion2 titleValue={'Collapsed Accordion'}
                       collapsed={true}
                       onChange={() => {}}/>
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