import React, { useState } from 'react'
import Header from './components/Header/index'
import SignIn from './components/Body/login.jsx'
import SignUp from './components/Body/signup.jsx'
import Footer from './components/footer/index'
import "./App.css"

export default function App() {
  const [isShow, setIsShow] = useState(true)
  function showPage(e) {
    setIsShow(e)
  }
  return (
    <div>
      <Header isShow={isShow} />
      {isShow ? <SignIn showPage={showPage} /> : <SignUp showPage={showPage} />}
      <Footer />
    </div>
  )
}
