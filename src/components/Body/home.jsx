import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Footer from '../footer/index'
import Header from '../Header/index'
import "./home.css"
import img from '../../image/sticky.png'


export default function Home() {
    const [articles, setArticles] = useState([]);
    // const titleRef = useRef();
    // const bodyRef = useRef()
    const navigate = useNavigate()
    const username = localStorage.getItem('username')
    console.log(username);


    // the get data and render function
    const fetchArticles = async () => {
        try {
            const username = localStorage.getItem('username')
            const response = await axios.get(`http://127.0.0.1:3001/api/getarticle?username=${username}`);
            setArticles(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // get the data first time run
    useEffect(() => {
        fetchArticles();
    }, []);

    // create the article function - change to the other page
    function createArticle() {
        navigate("/article")
    }



    function detail(item) {
        // console.log(title, body, tasks_id);
        navigate("/article", { state: item })
    }

    return (
        <Fragment>
            <Header username={username} />
            <div className='home-body'>
                {articles.data && articles.data.map((item, index) => {
                    return (
                        <div className='home-item' key={index} onClick={() => detail(item)} >
                            <img src={img} alt="" className="sticky" />
                            <div className='content'>
                                {<h3 className='home-tittle-info'>{item.title}</h3>}
                                {<h4 className='home-body-info'>{item.body}</h4>}
                                {/* <button className='delete' onClick={() => deleteArticle(item.tasks_id)}>delete</button>
                            <button className='change' onClick={() => changeArticle(item.tasks_id, item.status)}>{item.status ? "change" : "complete"}</button> */}
                            </div>
                        </div>
                    )
                })}
                <button className='addArticle-icon' onClick={createArticle}>+</button>
            </div>
            <Footer />
        </Fragment>
    )
}
