import React, {useState} from 'react';

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
            <button onClick={onClickHandler}>
                <h3>{props.value}</h3>
            </button>
            {!collapsed && props.item.map(i => <div onClick={() => {
                onClickTitle(i.title)
            }}>{i.title}</div>)}
        </div>
    );
}

//раскукоживание не контролим