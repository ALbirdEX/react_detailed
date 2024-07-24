import React, {useEffect, useState} from "react";

export const Clock = () => {
    const [data, setData] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            console.log("TICK")
            setData(new Date())
        }, 1000)
    }, []);

    return <>
        {data.getHours()} : {data.getMinutes()} : {data.getSeconds()}
    </>
}