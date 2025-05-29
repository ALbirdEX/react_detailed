import React from "react";
import {ClockViewPropsType} from "./Clock";

function get2number(num: number) {
    return num < 10 ? "0" + num : num
}

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {   //диструктуризвция
    return <>
        {get2number(date.getHours())}
        :
        {get2number(date.getMinutes())}
        :
        {get2number(date.getSeconds())}
    </>
}