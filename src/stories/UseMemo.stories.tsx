import React, {useState, useMemo, memo} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i;
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(event) => setA(+event.currentTarget.value)}/>
        <input value={b} onChange={(event) => setB(Number(event.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>

}


const UserSecret = memo((props: { users: string[] }) => {
    console.log('UserSecret!')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
})
//const Users = memo(UserSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Alex', 'Dima', 'Danila', 'Fedor'])

    const newArray = useMemo(() => {
        const newArray =  users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    },[users])

    const addUser = () => {
        setUsers([...users, 'Verka ' + new Date().getTime()])
    }


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>Add user</button>
        {counter}
        <UserSecret users={newArray}/>
        {/*<Users users={users}/>*/}
    </>
}