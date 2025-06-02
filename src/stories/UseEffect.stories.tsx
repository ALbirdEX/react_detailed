import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    }) // сработает всегда

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)")
        document.title = counter.toString()
    }, []) //если [] - сработает только первый рендер

    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter]) //если [counter] - сработает только при изменении зависимости

    return <>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <div>FAKE: {fake} COUNTER: {counter} </div>
    </>
}


export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample")

    useEffect(() => {

        setTimeout(() => {
            console.log("setTimeout")
            document.title = counter.toString()
        }, 5000)

    }, [counter])


    return <>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <div>FAKE: {fake} COUNTER: {counter} </div>
    </>
}

export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SetIntervalExample")

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, []);

    return <>FAKE: {fake} COUNTER: {counter}</>
}

export const ClockExample = () => {
    const [counter, setCounter] = useState(1)

    let clock = new Date()

    useEffect(() => {
        setInterval(() => {
            setCounter(counter + 1)
        }, 1000)
    });
    return (
        <>
            {clock.getHours()} : {clock.getMinutes()} : {clock.getSeconds()}
        </>
    )
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("Component render: " + counter)

    useEffect(() => {
        console.log("Effect occurred: " + counter)

        return () => {
            console.log("RESET EFFECT: " + counter)
        }

    }, [counter]);

    const increase = () => {
        (setCounter(counter + 1))
    }

    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeyTrackerExample = () => {
    const [text, setText] = useState('')

    console.log("Component render with: " + text)

    /*  useEffect(() => {
          const pressKeyHandler = (e: KeyboardEvent) => {
              console.log(e.key)
              setText((prevState) => prevState + e.key)
          }
          window.addEventListener('keypress', pressKeyHandler)

          return () => {
              window.removeEventListener('keypress', pressKeyHandler)
          }
      }, []);*/

    useEffect(() => {

        const pressKeyHandler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', pressKeyHandler)

        return () => {
            window.removeEventListener('keypress', pressKeyHandler)
        }
    }, [text]);

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample2 = () => {
    const [text, setText] = useState('')
    console.log("Component render with: " + text)

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            console.log("TIMEOUT EXPIRED")
            setText('3 seconds passed')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [text]);

    return <>
        Typed text: {text}
    </>
}