import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/index'
import Header from '../Header/index'
import "./home.css"

export default function Home() {
    const arr = [{ name: "ccc" }, { name: 'xxx' }, { name: 'xxx' }, { name: 'xxx' }, { name: 'xxx' }, { name: 'xxx' }, { name: 'xxx' },]
    const navigate = useNavigate()
    function createArticle() {
        navigate("/home/article")
    }

    return (
        <Fragment>
            <Header titleName={"All Article"} />
            <div className='home-body'>
                {arr.map((item, index) => {
                    return (
                        <div className='home-item' key={index} >{item.name}</div>
                    )
                })}
                <button className='addArticle-icon' onClick={createArticle}>+</button>
            </div>
            <Footer />
        </Fragment>
    )
}
