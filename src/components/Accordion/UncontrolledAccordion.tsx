import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string;
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true)

    const onClickHandler = () => {
      setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={onClickHandler}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div> //псевдоистина, псевдоложь
    )
}

export function UncontrolledAccordion2(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true)

    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }

    console.log('Accordion rendering')
    if (!collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}
                                onClickHandler={onClickHandler}/>
                <AccordionBody/>
            </div>
        );
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClickHandler={onClickHandler}/>
        </div>
    );

}

type AccordionTitlePropsType = {
    title: string
    onClickHandler?: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={props.onClickHandler}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}