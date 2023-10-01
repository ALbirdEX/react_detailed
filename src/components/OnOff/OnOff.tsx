import React from 'react';

type OnOffPropsType = {
    on: boolean
}

export const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        width: "100px",
        height: "50px",
        marginLeft: "5px",
        padding:"5px",
        border: "5px solid black",
        borderRadius: "10px",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: "100px",
        height: "50px",
        marginLeft: "5px",
        padding:"5px",
        border: "5px solid black",
        borderRadius: "10px",
        backgroundColor: !props.on ? "red" : "white"
    }
    const indicatorStyle = {
        width: "25px",
        height: "25px",
        marginLeft: "5px",
        padding:"0px",
        border: "3px solid black",
        borderRadius: "50px",
        backgroundColor: props.on ? "green" : "red"
    }

    return (
        <div>
            <button style={onStyle}>On</button>
            <button style={offStyle}>Off</button>
            <button style={indicatorStyle}>✖️</button>
        </div>
    );
};

export default OnOff;