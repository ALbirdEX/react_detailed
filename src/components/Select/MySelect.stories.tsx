import React, {useState} from 'react';
import {MySelect} from "./MySelect";

export default {
    title: 'My select',
    component: MySelect
}

export const CollapsedMySelect = () => {

    const [title, setTitle] = useState<string>("Click")
    const onChangeTitle = (value: string) => {
        setTitle(value)
    }

    return <MySelect value={title}
                     onChange={onChangeTitle}
                     item={[
                         {title: "Viktor", value: 1},
                         {title: "Dima", value: true},
                         {title: "Ivan", value: "10"},
                         {title: "Alex", value: false},
                         {title: "I", value: ""}
                     ]}/>
}