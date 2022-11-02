import React, { useState, useEffect } from "react"
import '../styles/Button.css';

export function Button(props) {
    let [counter, setCounter] = useState(0);
    let [users, setUsers] = useState(props.users)


    useEffect(() => {
        document.title = `You clicked ${counter} times`
    })
    
    const addUser = () => {
      setUsers(current => [...current, 'Planeo'])
    }


    return (
        <div>
            <h1>You clicked {counter} times</h1>
            <h3>Users list</h3>
            <ul>
                { users.map((user, index) => {
                    return (<li key={index}>{user}</li>)
                })

                }
            </ul>
            <a href="#" className="button" onClick={() => addUser()}>Click Ad user</a>
            <a href="#" className="button" onClick={() => setCounter(counter++)}>Click</a>
        </div>
    )
}
