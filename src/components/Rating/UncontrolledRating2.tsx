import React, {useState} from "react";


//атрибуты, если строковые то {}, а если строковые то можно просто ''


export function UncontrolledRating2() {
    console.log('Rating rendering')

    let [value, setValue] = useState(0)

    const onClickHandler = (val: number) => {
        setValue(val)
    }
    return (
        <div>
            <Star selected={value > 0} number={1} onClickHandler={onClickHandler}/>
            <Star selected={value > 1} number={2} onClickHandler={onClickHandler}/>
            <Star selected={value > 2} number={3} onClickHandler={onClickHandler}/>
            <Star selected={value > 3} number={4} onClickHandler={onClickHandler}/>
            <Star selected={value > 4} number={5} onClickHandler={onClickHandler}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    number: number
    onClickHandler: (val: number) => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => {props.onClickHandler(props.number)}}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
}
