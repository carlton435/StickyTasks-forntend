import React, { } from 'react'
import { Routes, Route } from 'react-router-dom';
import "./App.css"
import SignIn from './components/Body/login.jsx'
import SignUp from './components/Body/signup.jsx'
import Home from './components/Body/home.jsx'
import Article from './components/Body/article.jsx'
export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/article" element={<Article />} />
      </Routes>
      {/* {isShow ? <SignIn showPage={showPage} /> : <SignUp showPage={showPage} />} */}
    </div>
  )
}
