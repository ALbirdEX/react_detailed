import React, {memo, useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UserSecret = memo((props: { users: string[] }) => {
    console.log('UserS!')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
})
//const Users = memo(UserSecret)

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Alex', 'Dima', 'Danila'])
    const addUser = () => {
        setUsers([...users, 'Verka ' + new Date().getTime()])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessageCounter count={counter}/>
        <UserSecret users={users}/>
        {/*<Users users={users}/>*/}
    </>
}