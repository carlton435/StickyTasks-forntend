import React from 'react'
import './index.css'
import logo from '../../image/image 1.png'

export default function SignIn(props) {
    const { username } = props

    return (
        <div >
            {/*  头部 */}
            <div className='header'>
                {/* 头部左部分 */}
                <div className='header-left'>
                    <img src={logo} alt="" />
                    <h3>StickyTasks</h3>
                </div>
                {/* 中间用户名部分 */}
                <div className='header-username'>
                    <h3>Welcome {username}</h3>
                </div>
            </div>


        </div>
    )
}
