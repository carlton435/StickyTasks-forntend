import React from 'react'
import { useRef } from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

export default function Login(props) {
    const { showPage } = props
    const inputRef1 = useRef()
    const inputRef2 = useRef()

    function changePage() {
        showPage(false)
    }

    function login() {
        const username = inputRef1.current.value
        const password = inputRef2.current.value
        console.log(username, password);
    }
    return (
        <div className='body'>
            {/* body部分，注册表格 */}
            <h2>Sign in</h2>
            <h5>To continue to use StickyTasks.</h5>
            <input type="text" ref={inputRef1} className='input-username' placeholder='input username' />
            <input type="password" ref={inputRef2} className='input-password' placeholder='input password' />
            <button onClick={login}>Login</button>
            <span>No account? <Link href="/signup" onClick={changePage}>Sign up</Link></span>
        </div>


    )
}
