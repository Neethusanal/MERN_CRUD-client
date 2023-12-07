import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './EditUser.css';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
const EditUser = () => {
      const location=useLocation()
     const user=location.state?.userdata
    
     const [firstname,setFirstname]=useState('')
     const [lastname,setLastname]=useState('')
     const [email,setEmail]=useState('')
     const [gender,setGender]=useState('')
     const [avatar,setAvatar]=useState('')
     const [domain,setDomain]=useState('')
     const [id,setId]=useState('')
     const navigate=useNavigate()
   
  
    console.log(user,"jjgggggggggffffffffff")
    useEffect(() => {
    setFirstname?.(user.first_name)
    setLastname?.(user.last_name)
    setEmail?.(user.email)
    setGender?.(user.gender)
    setAvatar?.(user.avatar)
    setDomain?.(user.domain)
    setId?.(user.id)
    
    }, [])
    const handleUpdate = async (e) => {
      e.preventDefault();
      console.log(firstname,lastname,gender,domain,email,"kkkkkk")
       axios.put("http://localhost:4000/edituser",{id,firstname,lastname,gender,email,domain,avatar}, { withCredentials: true }).then((response)=>{
      
      if(response.data.status){
        Swal.fire(response.data.message);
        navigate('/home')
      }else{
        Swal.fire(response.data.message);
      }
      console.log(response,"edituser check")
     })
     
}
      
    
    
  return (
    <div>
     <div key="" className="grid__item">
     <div className="flex-container">
      <div className="heading">Edit UserData</div>
      <form className="form" onSubmit={handleUpdate}>
        <div className="mb-4">
          <label htmlFor="brand" className="form-label">
            firstName
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="brand" className="form-label">
            LastName
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="brand" className="form-label">
          Email
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="brand" className="form-label">
            Gender
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="basic_pay" className="form-label">
            Avatar
          </label>
          <input
            type="text"
            id="avatar"
            name="avatar"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="form-label">
            Domain
          </label>
          <input
            type="text"
            id="domain"
            name="domain"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="form-input"
            required
          />
        </div>
        
        <button type="submit" className="button">
          Update
        </button>
      </form>
    </div>
        </div>
      </div>
  
  )
}

export default EditUser