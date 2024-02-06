import React, {ChangeEvent, useRef, useState} from 'react'

export default {
    title: 'input'
}


export const UncontrolledInput = () => <input/>;

export const TrackValeOfUncontrolledInput = () => {
    const [value, setValue] = useState("")

    const onChange = () => (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }

    return <><input onChange={onChange}/> - {value}</>
};

export const GetValeOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")

    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>SAVE</button>
        actual value- {value}</>
};

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true)
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        debugger
        setParentValue(event.currentTarget.checked)
    }

    return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"3"}>Kiev</option>
    </select>
}


export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>;
