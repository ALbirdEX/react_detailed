import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

export type ClockViewPropsType = {       // типы для View
    date: Date
}

type PropsType = {
    mode?: "digital" | "analog"
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    const [viewMode, setViewMode] = useState(true)

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {clearInterval(intervalID)}
    }, []);

    let view;

    if (viewMode) {
        view = <AnalogClockView date={date}/>
    } else {
        view = <DigitalClockView date={date}/>
    }

    /*switch (props.mode) {
        case "analog" :
            view = <AnalogClockView date={date}/>
            break
        case "digital" :
        default:
           view = <DigitalClockView date={date}/>

    }*/

    return <>
        <div>{view}</div>
        <button onClick={() => {
           setViewMode(!viewMode)
        }}>Mode clock</button>
    </>
    /*return <div>   // через тернарное
        {props.mode === "digital" ?
            <>
                {get2number(data.getHours())}
                :
                {get2number(data.getMinutes())}
                :
                {get2number(data.getSeconds())}
            </>
            :
            <>ANALOG</>
        }
    </div>*/
}
