import React from 'react'
import { useRoutes } from 'react-router-dom';
import "./App.css"
import routes from './Routes'

export default function App() {

  const route = useRoutes(routes)

  return (
    <div>
      {route}
    </div>
  )
}
