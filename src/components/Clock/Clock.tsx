import React, {useEffect, useState} from "react";

function get2number(num: number) {
    return num < 10 ? "0" + num : num
}

export const Clock: React.FC = () => {
    const [data, setData] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setData(new Date())
        }, 1000)
        return () => {clearInterval(intervalID)}
    }, []);

    return <>
        {get2number(data.getHours())}
        :
        {get2number(data.getMinutes())}
        :
        {get2number(data.getSeconds())}
    </>
}