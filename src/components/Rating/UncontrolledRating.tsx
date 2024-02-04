import React, {useState} from "react";


//атрибуты, если строковые то {}, а если строковые то можно просто ''
type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type UncontrolledRatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    console.log('Rating rendering')

    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    const onClickHandler = (value: RatingValueType) => {
        setValue(value)
        props.onChange(value);
    }

    return (
        <div>
            <button onClick={() => onClickHandler(1)}>1</button><Star selected={value > 1}/>
            <button onClick={() => onClickHandler(2)}>2</button><Star selected={value > 2}/>
            <button onClick={() => onClickHandler(3)}>3</button><Star selected={value > 3}/>
            <button onClick={() => onClickHandler(4)}>4</button><Star selected={value > 4}/>
            <button onClick={() => onClickHandler(5)}>5</button>
            <span onClick={() => onClickHandler(0)}>{
                value
                ? <span><b> *RESET, touch me!*</b></span>
                : " *RESET, touch me!*"}</span>
            <Star selected={value > 0}/>

        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    if (props.selected) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }
}