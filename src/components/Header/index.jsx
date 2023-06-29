import React from 'react'
import './index.css'

export default function SignIn(props) {
    const { titleName } = props

    return (
        <div >
            {/*  头部 */}
            <div className='header'>
                {/* 头部左部分 */}
                <div className='header-left'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU" alt="" />
                    <h3>StickyTasks</h3>
                </div>
                {/* 头部右部分 */}
                <div className='header-right'>
                    <h3 className='Home-title'>Home</h3>
                    <h3>{titleName}</h3>
                </div>
            </div>


        </div>
    )
}
