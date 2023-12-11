import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeDeletedUser,setUserDetails } from '../Redux/UserSlice';
import Swal from 'sweetalert2';
import './Home.css'

const Home = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.userDetails);
  console.log(users)

  const filteredUsers = users.filter((user) => !user.deleted);

  const handleEdit = (userdata) => {
    navigate('/edit', { state: { userdata } });
  };
  const handleDelete = async (id) => {
    try {
      console.log(id)
    const{data}=  await axios.delete(`http://localhost:4000/deleteuser/${id}`);
      console.log('User deleted successfully');
      Swal.fire(data.message)
      dispatch(removeDeletedUser(id));
      navigate('/home')
      // Perform any additional actions or updates after successful deletion
    } catch (error) {
      console.error('Error deleting user:', error);
      // Handle the error, show an alert, or log it
    }
  };

  return (
    <div>
      
    {filteredUsers.map((user) => (
       <div className="ProfileCard">
       <div className="ProfileCardHeader">
         <img src={user.avatar} alt="profile-picture" />
       </div>
       <div className="ProfileCardBody">
         <h4 className="Typography-font-medium">Name:{user.first_name}, {user.last_name}</h4>
         <p className="Typography-font-medium">Email:{user.email}</p>
         <p className="Typography-font-medium">Gender:{user.gender}</p>
         <p className="Typography-font-medium">Domain{user.domain}</p>
         <p className="Typography-font-medium">{user.available}</p>
       </div>
       <div className="ProfileCardFooter">
         <button onClick={() => handleEdit(user)}>Edit</button>
         <button onClick={() => handleDelete(user.id)}>Delete</button>
       </div>
     </div>
      ))}
    </div>
    
    



    
  );
};

export default Home;
