

import React, { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import './AddUser.css';
import { useNavigate } from 'react-router-dom';
const AddUser = () => {
    const [firstname,setFirstname]=useState('')
     const [lastname,setLastname]=useState('')
     const [email,setEmail]=useState('')
     const [gender,setGender]=useState('')
     const [avatar,setAvatar]=useState('')
     const [domain,setDomain]=useState('')
     //const [id,setId]=useState('')
     const [available,setAvailable]=useState('')
     const navigate=useNavigate()
     const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(firstname,lastname,gender,domain,email,"kkkkkk")
         axios.post("http://localhost:4000/createuser",{firstname,lastname,gender,email,domain,avatar,available}, { withCredentials: true }).then((response)=>{
        
        if(response.data.status){
          Swal.fire(response.data.message);
          navigate('/home')
        }else{
          Swal.fire(response.data.message);
        }
       
       })
       
  }
        
  return (
    <div>
 <div key="" className="grid__item">
     <div className="flex-container">
      <div className="heading">Add UserData</div>
      <form className="form" onSubmit={handleSubmit}>
      
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
        <div className="mb-4">
  <label htmlFor="available" className="form-label">
    Available
  </label>
  <div>
    <input
      type="checkbox"
      id="availableTrue"
      name="availableTrue"
      checked={available === true}
      onChange={() => setAvailable(true)}
      className="form-input"
    />
    <label htmlFor="availableTrue" className="form-label-checkbox">
      True
    </label>
  </div>
  <div>
    <input
      type="checkbox"
      id="availableFalse"
      name="availableFalse"
      checked={available === false}
      onChange={() => setAvailable(false)}
      className="form-input"
    />
    <label htmlFor="availableFalse" className="form-label-checkbox">
      False
    </label>
  </div>
</div>
        
        <button type="submit" className="button mt-2">
        submit
        </button>
      </form>
    </div>
        </div>
    </div>
  )
}

export default AddUser