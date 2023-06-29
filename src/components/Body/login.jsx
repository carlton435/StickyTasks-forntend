import React from 'react'
import { useRef, Fragment } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../footer/index'
import Header from '../Header/index'


export default function Login() {
    const navigate = useNavigate();
    const inputRef1 = useRef()
    const inputRef2 = useRef()


    function login() {
        const username = inputRef1.current.value
        const password = inputRef2.current.value
        console.log(username, password);
        navigate('/home')
    }
    return (
        <Fragment>
            <Header titleName={"Sign In"} />
            <div className='body'>
                {/* body部分，注册表格 */}
                <h2>Sign in</h2>
                <h5>To continue to use StickyTasks.</h5>
                <input type="text" ref={inputRef1} className='input-username' placeholder='input username' />
                <input type="password" ref={inputRef2} className='input-password' placeholder='input password' />
                <button onClick={login}>Login</button>
                <span>No account? <Link to="/signup" >Sign up</Link></span>
            </div>
            <Footer />
        </Fragment>

    )
}
