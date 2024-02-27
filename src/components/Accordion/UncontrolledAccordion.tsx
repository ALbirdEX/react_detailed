import React, {useReducer,} from 'react';
import {reducer, TOGGLE_CONSTANT} from "./reducer";

type AccordionPropsType = {
    titleValue: string;
}

/*export function UncontrolledAccordion(props: AccordionPropsType) {

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
}*/

export function UncontrolledAccordion2(props: AccordionPropsType) {
    console.log('UncontrolledAccordion2 rendering')

    //let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <div>
        {/*<AccordionTitle title={props.titleValue} onClickHandler={() => {setCollapsed(!collapsed)}}/>*/}
        <AccordionTitle title={props.titleValue} onClick={() => {
            dispatch({type: TOGGLE_CONSTANT})
        }}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => {
        props.onClick()
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