import React, { Fragment, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/index'
import Header from '../Header/index'
import "./article.css"
import axios from 'axios'

export default function Article() {
    const navigate = useNavigate()
    const titleRef = useRef()
    const bodyRef = useRef()
    function addArticle() {
        const title = titleRef.current.value
        const body = bodyRef.current.value
        const username = localStorage.getItem('username')
        let url = `http://127.0.0.1:3001/api/addarticle?username=${username}&title=${title}&body=${body}`
        axios.post(url)
        navigate("/home")
    }
    return (
        <Fragment>
            <Header titleName={"Add Article"} />
            <div>
                <div className='body'>
                    <h2>Article</h2>
                    <input ref={titleRef} type="text" placeholder='Title' />
                    <textarea ref={bodyRef} name="body" id="" cols="30" rows="10" placeholder='Text'></textarea>
                </div>
                <button className='addArticle-icon' onClick={addArticle}>✓</button>
            </div>
            <Footer />
        </Fragment>
    )
}
