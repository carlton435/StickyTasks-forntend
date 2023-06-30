import React, { Fragment, useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/index'
import Header from '../Header/index'
import "./home.css"
import axios from 'axios'

export default function Home() {
    // const username = localStorage.getItem('username')
    const [articles, setArticles] = useState([]);
    const titleRef = useRef();
    const bodyRef = useRef()
    const navigate = useNavigate()
    const fetchArticles = async () => {
        try {
            const username = localStorage.getItem('username')
            const response = await axios.get(`http://127.0.0.1:3001/api/getarticle?username=${username}`);
            setArticles(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {

        fetchArticles();
    }, []);


    // const arr = [{ name: "ccc" }, { name: 'xxx' }, { name: 'xxx' }, { name: 'xxx' }, { name: 'xxx' }, { name: 'xxx' }, { name: 'xxx' },]
    function createArticle() {
        navigate("/home/article")
    }

    function changeArticle(id, status) {
        const updatedArticles = articles.data.map((item) => {
            if (item.tasks_id === id) {
                return { ...item, status: !item.status };
            }
            return item
        })
        setArticles({ ...articles, data: updatedArticles });

        // if status = false  click can updata

        if (!status) {
            const title = titleRef.current.value
            const body = bodyRef.current.value
            let url = `http://127.0.0.1:3001/api/changearticle?title=${title}&body=${body}&id=${id}`

            const updateArticle = async () => {
                try {
                    const result = await axios.post(url);
                    console.log(result.data);
                    fetchArticles(); // 重新获取文章数据
                } catch (error) {
                    console.log(error);
                }
            };
            updateArticle()

        }
    }

    console.log("article is : " + articles.data);
    return (
        <Fragment>
            <Header titleName={"All Article"} />
            <div className='home-body'>
                {articles.data && articles.data.map((item, index) => {
                    return (
                        <div className='home-item' key={index} >
                            {item.status ? <h3>{item.title}</h3> : <input ref={titleRef} className='change-title' type="text" />}
                            {item.status ? <h4>{item.body}</h4> : <textarea ref={bodyRef} className='change-body' name="" id="" cols="30" rows="10"></textarea>}
                            <button className='delete' >delete</button>
                            <button className='change' onClick={() => changeArticle(item.tasks_id, item.status)}>{item.status ? "change" : "complete"}</button>
                        </div>
                    )
                })}
                <button className='addArticle-icon' onClick={createArticle}>+</button>
            </div>
            <Footer />
        </Fragment>
    )
}