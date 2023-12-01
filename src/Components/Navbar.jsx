import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate('/')
  }
  return (
    <div className="navbar">
    <button onClick={handleLogout}>Logout</button>
  </div>
  )
}

export default Navbar