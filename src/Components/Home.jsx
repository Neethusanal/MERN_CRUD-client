import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { setUserDetails} from '../Redux/UserSlice';

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const userdetails = useSelector((state) => state.user)
 
  

  useEffect(() => {
    getallUsers();
  }, [dispatch]);

  const getallUsers = (page = 1, limit = 12) => {
    axios.get(`http://localhost:4000/getusers?page=${page}&limit=${limit}`)
      .then(response => {
        dispatch(setUserDetails(response.data.result));
        
        setUsers(response.data.result);
        
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  console.table(userdetails,"kkkk")
  const handleEdit = (userdata) => {
  console.table(userdata)
    navigate('/edit', { state: { userdata } })


} 

  return (
    <div className="grid">
      {users?.map((user, index) => {
        return (
          <div key={index} className="grid__item">
            <div className="card">
              <img className="card__img" src={user.avatar} alt="" />
              <div className="card__content">
                <h1 className="card__header">Name: {user.first_name}, {user.last_name}</h1>
                <p className="card__text">Email: {user.email}</p>
                <p className="card__text">Gender: {user.gender}</p>
                <p className="card__text">Domain: {user.domain}</p>
                <button className="card__btn"  onClick={() => handleEdit(user)}>Edit</button>
                <button className="card__btn">Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
