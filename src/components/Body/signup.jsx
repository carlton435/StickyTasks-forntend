import React, { useRef } from 'react'
import axios from 'axios';
import "./signup.css"

export default function SignUp(props) {
    const { showPage } = props
    const usernameRef = useRef()
    const passwordRef = useRef()
    const checkRef = useRef()
    function changePage() {
        showPage(true)
    }

    async function signUp() {
        const username = usernameRef.current.value
        const password = passwordRef.current.value
        const check = checkRef.current.value
        if (check !== password) {
            return alert('两次密码不同')
        }
        let url = `http://127.0.0.1:3001/api/createuser?username=${username}&password=${password}`
        await axios.get(url).then((res) => {
            console.log(res.data);
        }, (err) => {
            console.log(err);
        })
    }
    return (
        <div className='body'>
            {/* body部分，注册表格 */}
            <h2>Sign up</h2>
            <h5>To continue to use StickyTasks.</h5>
            <input type="text" ref={usernameRef} className='input-username' placeholder='input username' />
            <input type="password" ref={passwordRef} className='input-password' placeholder='input password' />
            <input type="password" ref={checkRef} className='input-password-again' placeholder='input password again' />
            <button onClick={signUp}>Login</button>
            <span>Hvae account? <a href="###" onClick={changePage}>Sign in</a></span>
        </div>
    )
}
