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
            <Star selected={value > 0} value={1} onClickHandler={onClickHandler}/>
            <Star selected={value > 1} value={2} onClickHandler={onClickHandler}/>
            <Star selected={value > 2} value={3} onClickHandler={onClickHandler}/>
            <Star selected={value > 3} value={4} onClickHandler={onClickHandler}/>
            <Star selected={value > 4} value={5} onClickHandler={onClickHandler}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    onClickHandler: (val: 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => {props.onClickHandler(props.value)}}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
}
