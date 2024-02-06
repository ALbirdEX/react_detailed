//import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Accordion2} from "./Accordion";
import React, {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion2
}

const onChangeHandler = action('collapsed or no')
const onClickCallback = action('some item was clicked')

export const CollapsedAccordion = () => {
    return <Accordion2 titleValue={'Collapsed Accordion'}
                       collapsed={true}
                       onChange={() => {
                       }}
                       items={[
                           {title: "Viktor", value: 1},
                           {title: "Dima", value: true},
                           {title: "Ivan", value: "10"},
                           {title: "Alex", value: false},
                           {title: "I", value: ""}
                       ]}
                       onClick={onClickCallback}/>
}

export const OpenedAccordion = () => {
    return <Accordion2 titleValue={'Opened Accordion'}
                       collapsed={false}
                       onChange={onChangeHandler}
                       items={[
                           {title: "Viktor", value: 1},
                           {title: "Dima", value: true},
                           {title: "Ivan", value: "10"},
                           {title: "Alex", value: false},
                           {title: "I", value: ""}
                       ]}
                       onClick={onClickCallback}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(true)
    return <Accordion2 titleValue={'Accordion'}
                       collapsed={collapsed}
                       onChange={() => setCollapsed(!collapsed)}
                       items={[
                           {title: "Viktor", value: 1},
                           {title: "Dima", value: true},
                           {title: "Ivan", value: "10"},
                           {title: "Alex", value: false},
                           {title: "I", value: "..."}
                       ]}
                       onClick={(value) =>{alert(`User with value ${value} should bt HAPPY!!!`)}}/>
}