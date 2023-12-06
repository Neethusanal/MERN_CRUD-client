import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../Components/Navbar'

const Layout = ()=>{
    return (
    <>
<div className="max-w-screen-2xl mx-auto rounded-2xl">
   <Navbar/>
    <Outlet />
    </div>
    </>
    )
}
export default Layout