import React, {useState} from "react";


//атрибуты, если строковые то {}, а если строковые то можно просто ''


export function UncontrolledRating() {
    console.log('Rating rendering')

    let [value, setValue] = useState(0)

    const onClickHandler = (value: number) => {
        setValue(value)
    }

    return (
        <div>
            <span onClick={() => onClickHandler(0)}>*RESET, touch me!* </span>
            <Star selected={value > 0}/><button onClick={() => onClickHandler(1)}>1</button>
            <Star selected={value > 1}/><button onClick={() => onClickHandler(2)}>2</button>
            <Star selected={value > 2}/><button onClick={() => onClickHandler(3)}>3</button>
            <Star selected={value > 3}/><button onClick={() => onClickHandler(4)}>4</button>
            <Star selected={value > 4}/><button onClick={() => onClickHandler(5)}>5</button>
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