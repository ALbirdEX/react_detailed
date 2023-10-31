import React, {useState} from 'react';


export function UncontrolledOnOff() {

    let [on, setOn] = useState<boolean>(true)

    const OnOffHandler = (value: boolean) => {
        setOn(value)
    }

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

    return (
        <div>
            <button style={onStyle}
                    onClick={() => OnOffHandler(true)}>On
            </button>
            {"Uncontrolled"}
            <button style={offStyle}
                    onClick={() => OnOffHandler(false)}>Off
            </button>
            <button style={indicatorStyle}>💡</button>
        </div>
    );
}

