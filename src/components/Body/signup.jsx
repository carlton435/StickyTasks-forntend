import React, { useRef, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './signup.css';
import Footer from '../footer/index'
import Header from '../Header/index'

export default function SignUp() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const checkRef = useRef();
    const [passwordMismatch, setPasswordMismatch] = useState(false);



    const signUp = async () => {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const check = checkRef.current.value;

        if (check !== password) {
            setPasswordMismatch(true);
            return;
        }

        const url = `http://127.0.0.1:3001/api/createuser?username=${username}&password=${password}`;


        await axios.get(url).then(res => {
            localStorage.setItem('token', res.data.token);
        }, err => {
            console.log(err);
        })



    };

    return (
        <Fragment>
            <Header titleName={"Sign Up"} />
            <div className="body">
                <h2>Sign up</h2>
                <h5>To continue to use StickyTasks.</h5>
                <input type="text" ref={usernameRef} className="input-username" placeholder="input username" />
                <input type="password" ref={passwordRef} className="input-password" placeholder="input password" />
                <input type="password" ref={checkRef} className="input-password-again" placeholder="input password again" />
                <button onClick={signUp}>Sign up</button>
                <span>
                    Already have an account? <Link to="/" >Sign in</Link>
                </span>
                {passwordMismatch && <p className="error-message">Passwords do not match</p>}
            </div>
            <Footer />
        </Fragment>
    );
}
