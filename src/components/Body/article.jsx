import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/index'
import Header from '../Header/index'
import "./article.css"

export default function Article() {
    const navigate = useNavigate()
    function addArticle() {
        navigate("/home")
    }
    return (
        <Fragment>
            <Header titleName={"Add Article"} />
            <div>
                <div className='body'>
                    <h2>Article</h2>
                    <input type="text" placeholder='Title' />
                    <textarea name="body" id="" cols="30" rows="10" placeholder='Text'></textarea>
                </div>
                <button className='addArticle-icon' onClick={addArticle}>✓</button>
            </div>
            <Footer />
        </Fragment>
    )
}
