import React, { Fragment, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Footer from '../footer/index'
import Header from '../Header/index'
import "./article.css"
import deleteImg from "../../image/delete.png"

export default function Article() {
    const item = window.history.state;
    let id = item.usr
    console.log(id);
    const navigate = useNavigate()
    const titleRef = useRef()
    const bodyRef = useRef()
    function addArticle() {
        const title = titleRef.current.value
        if (title.length > 8) {
            return alert('the title length cannot more than 8')
        }
        const body = bodyRef.current.value
        const username = localStorage.getItem('username')
        let url = `http://127.0.0.1:3001/api/addarticle?username=${username}&title=${title}&body=${body}`
        axios.post(url)
        navigate("/home")
    }


    // change the article function
    function changeArticle(id) {
        const { tasks_id } = id

        const title = titleRef.current.value
        if (title.length > 8) {
            return alert('the title length cannot more than 8')
        }
        const body = bodyRef.current.value
        console.log(typeof title, title);
        console.log(typeof body, body);
        console.log("is is :", tasks_id);


        let url = `http://127.0.0.1:3001/api/changearticle?title=${title}&body=${body}&tasks_id=${tasks_id}`

        const updateArticle = async () => {
            try {
                const result = await axios.post(url);
                console.log(result.data);
                // fetchArticles(); // 重新获取文章数据
            } catch (error) {
                console.log(error);
            }
        };
        updateArticle()
        navigate("/home")
    }

    // delete the article function
    async function deleteArticle(id) {
        const { tasks_id } = id
        let url = `http://127.0.0.1:3001/api/deletearticle?tasks_id=${tasks_id}`
        try {
            const result = await axios.delete(url)
            console.log(result);
        } catch (error) {
            console.log(error);
        }
        navigate("/home")
    }



    return (
        <Fragment>
            <Header titleName={"Add Article"} />
            <div>

                {!id ?
                    <Fragment>
                        <div className='body'>
                            <h2>Article</h2>
                            <input ref={titleRef} type="text" placeholder='Title' />
                            <textarea ref={bodyRef} name="body" id="" cols="30" rows="10" placeholder='Text'></textarea>
                        </div>
                        <button className='addArticle-icon' onClick={addArticle}>✓</button>
                    </Fragment>
                    : <Fragment>
                        <div className='body'>
                            <h2>Article</h2>
                            <input type="text" ref={titleRef} placeholder='Title' defaultValue={item.usr.title} />
                            <textarea name="body" ref={bodyRef} id="" cols="30" rows="10" placeholder='Text' defaultValue={item.usr.body}></textarea>
                        </div>
                        <img src={deleteImg} alt="" className='deleteArticle-icon' onClick={() => deleteArticle(id)} />
                        <button className='addArticle-icon' onClick={() => changeArticle(id)}>✓</button>
                    </Fragment>}

            </div>
            <Footer />
        </Fragment>
    )
}
