import React from 'react'
import { useRef, Fragment } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../footer/index'
import Header from '../Header/index'
import axios from 'axios'


export default function Login() {
    const navigate = useNavigate();
    const inputRef1 = useRef()
    const inputRef2 = useRef()


    async function login() {
        const username = inputRef1.current.value
        const password = inputRef2.current.value
        // get the token 
        // let token = localStorage.getItem('token')
        // console.log('token is', token);
        // if have token, check by token
        // if (!token || token.trim() === '') {
        //     console.log(1111);
        //     alert('you do not have the token');
        // }

        // // get the usernameCheck
        // let tokenUrl = `http://127.0.0.1:3001/api/verifytoken?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjEyMyIsInBhc3N3b3JkIjoiMTIzIiwiaWF0IjoxNjg3OTYwMTAwfQ.YJ2EtqXtCa7YjFhPZo_t1JLtTlxgiuX0qmmnH8e6OMY`
        // let usernameCheck = await axios.get(tokenUrl)
        // console.log(usernameCheck);
        // // if (!usernameCheck.data.username) {
        // //     return alert('your token cannot find the user')
        // // }

        // // check the token username and the input username
        // if (!usernameCheck === username) {
        //     return alert('your username is wrong')
        // }

        // check the password
        let passwordUrl = `http://127.0.0.1:3001/api/verifyuser?username=${username}&password=${password}`
        const checkPassword = await axios.get(passwordUrl)
        console.log();
        if (checkPassword.data.status === 0) {
            return alert('your password or username is wrong')
        }




        // if not or have token still need to check by username and password


        localStorage.setItem('username', username);
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
