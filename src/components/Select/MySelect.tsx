import React, {useState} from 'react';
import s from './MySelect.module.css'
import {useAutoAnimate} from "@formkit/auto-animate/react";

type ItemsType = {
    title: string;
    value: any
}

type MySelectPropsType = {
    value: any;
    onChange: (value: string) => void;
    item: ItemsType[]
}

export function MySelect(props: MySelectPropsType) {

    const [animationRef] = useAutoAnimate<HTMLDListElement>()

    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [, setTitle] = useState<string>("")

    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }

    const onClickTitle = (value: string) => {
        setTitle(value)
        setCollapsed(!collapsed)
        props.onChange(value)
    }

    return (
        <div>
            <button onClick={onClickHandler} className={s.button}><h3>{props.value}</h3></button>
            <span ref={animationRef}>
                {!collapsed && props.item.map(i => <div className={s.list}
                    onClick={() => {onClickTitle(i.title)}}>{i.title}</div>)}
            </span>
        </div>
    );
}

//раскукоживание не контролим