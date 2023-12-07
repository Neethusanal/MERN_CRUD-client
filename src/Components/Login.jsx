import React, { useState,useEffect } from 'react'
import "./Login.css";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeDeletedUser, setUserDetails } from '../Redux/UserSlice';
const Login = () => {
    const [values ,setValues]=useState({
        email:'',
        password:''
    })
   
  const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const navigate=useNavigate()
    
  
  const getallUsers = (page = 1, limit = 12) => {
    axios
      .get(`http://localhost:4000/getusers?page=${page}&limit=${limit}`)
      .then((response) => {
        dispatch(setUserDetails(response.data.result));
        setUsers(response.data.result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:4000/login", {...values});
        console.log('Data sent successfully:', response.data);
        if(response.data.success)
        { 
          Swal.fire(response.data.message)
          console.log(response.data.token,"token")
          localStorage.setItem("token", response.data.token);
          getallUsers()
          navigate('/home');
  
       
  ;
        }
        else{
          Swal.fire(response.data.errors.message)
        }
       
        
      } catch (err) {
        console.log(err);
        // Handle errors here
      }
      
    };
    
  return (
    <div>
<div class="login-form">
  <form  onSubmit={handleSubmit}>
    <h1>Login</h1>
    <div class="content">
      <div class="input-field">
         <input
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
      </div>
      <div class="input-field">
   
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
      </div>
     
    </div>
    <div class="action">
     
      <button>Sign in</button>
    </div>
  </form>
</div>


    </div>
  )
}

export default Login