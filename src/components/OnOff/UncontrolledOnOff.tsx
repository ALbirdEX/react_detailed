import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export function UncontrolledOnOff(props: PropsType) {

    let [on, setOn] = useState<boolean>(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        width: "100px",
        height: "50px",
        marginLeft: "5px",
        padding: "5px",
        border: "5px solid black",
        borderRadius: "10px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "100px",
        height: "50px",
        marginLeft: "5px",
        padding: "5px",
        border: "5px solid black",
        borderRadius: "10px",
        backgroundColor: !on ? "red" : "white"
    }
    const indicatorStyle = {
        width: "25px",
        height: "25px",
        marginLeft: "5px",
        padding: "0px",
        border: "3px solid black",
        borderRadius: "50px",
        backgroundColor: on ? "green" : "red"
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <button style={onStyle} onClick={onClicked}>On</button>
            {"Uncontrolled"}
            <button style={offStyle} onClick={offClicked}>Off</button>
            <button style={indicatorStyle}>💡</button>
        </div>
    );
}

