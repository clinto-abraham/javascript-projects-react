import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
        <h1>Home default</h1>
        <Outlet />
      </div>
    )
}

export default Home



