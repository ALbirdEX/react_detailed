import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Accordion2} from "./Accordion";

const meta: Meta<typeof Accordion2> = {       //данные о данных
    component: Accordion2,
};

export default meta;

type Story = StoryObj<typeof Accordion2>;

export const FirstAccordion: Story = {
    args: {
        titleValue: "HI",
        collapsed: true,
        // это для Control - управляющих элементов
    }
}

const onChangeHandler = action('collapsed or no')  //для старого типа написания, для Actions

export const CollapsedAccordion = () => {         //ближе к REACT
    return <Accordion2 titleValue={'Collapsed Accordion'}
                       collapsed={true}
                       onChange={onChangeHandler}/>
}