import React from 'react';


type ItemsType = {
    title: string;
    value: any
}

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onChange: () => void;
    items: ItemsType[];
    onClick: (value: any) => void
}

/*export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            setAccordionCollapsed={() => {
                            }}
                            collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div> //псевдоистина, псевдоложь
    )
}*/

export function Accordion2(props: AccordionPropsType) {
    console.log('Accordion rendering')

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string;
    onChange: () => void;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    //return <h3 onClick={props.onChange}>{props.title}</h3>
    return <h3 onClick={(event) => props.onChange()}>{props.title}</h3>
    //с event показывл димыч в storybook 10.1 так более правильно
}

type  AccordionBodyPropsType = {
    items: ItemsType[];
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (
        <menu>
            {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{`${i.title} is value ${i.value}`}</li>)}
        </menu>
    );
}