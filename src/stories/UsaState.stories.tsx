import React, {useState} from "react";

export default {
    title: 'useState demo'
}

function generationData() {
    console.log("generationData")

    let tempResult = 1;
    for (let i = 1; i <= 12; i++) {
        let fake = 0
        while (fake < 1000000) {
            fake++
            const fakeValue = Math.random()
        }
        tempResult *= i;
    }
    return tempResult
}

export const Example1 = () => {
    console.log('Example1')

    //const initValue = useMemo(generationData, [])

//избавляемся от useMemo, вызываем единажды generationData принимая его ретурн за стартовое знчение.
    const [counter, setCounter] = useState<number>(generationData)
    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <div>
            {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
            {/*<button onClick={() => setCounter(state => state +1)}>+</button> //закинули в setState функцию*/}
            <button onClick={() => setCounter(changer)}>+</button>
        </div>
        {counter}
    </>
}