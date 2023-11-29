import React from 'react';

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    setAccordionCollapsed: (collapsed: boolean) => void;
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

    return <div>
        props.collapsed ?
        <AccordionTitle title={props.titleValue}
                        setAccordionCollapsed={props.setAccordionCollapsed}
                        collapsed={props.collapsed}/>
        <AccordionBody/>
        :
        <AccordionTitle title={props.titleValue}
                        setAccordionCollapsed={props.setAccordionCollapsed}
                        collapsed={props.collapsed}/>

    </div>

   /* if (!props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}
                                setAccordionCollapsed={props.setAccordionCollapsed}
                                collapsed={props.collapsed}/>
                <AccordionBody/>
            </div>
        );
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            setAccordionCollapsed={props.setAccordionCollapsed}
                            collapsed={props.collapsed}/>
        </div>
    );*/

}

type AccordionTitlePropsType = {
    title: string;
    collapsed: boolean;
    setAccordionCollapsed: (collapsed: boolean) => void;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => {
        props.setAccordionCollapsed(!props.collapsed)
    }}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <menu>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </menu>
    );
}