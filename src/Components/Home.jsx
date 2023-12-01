import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getallUsers();
  }, []);

  const getallUsers = (page = 1, limit = 20) => {
    axios.get(`http://localhost:4000/getusers?page=${page}&limit=${limit}`)
      .then(response => {
        setUsers(response.data.result);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

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
                <button className="card__btn">Edit</button>
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
