import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../Redux/UserSlice';

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userdetails = useSelector((state) => state.user);

  useEffect(() => {
    getallUsers();
  }, [dispatch]);

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

  const handleEdit = (userdata) => {
    navigate('/edit', { state: { userdata } });
  };

  return (
    
    
    <div style={{ display: 'flex', justifyContent: 'center', padding: '6rem', backgroundColor: '#f5f5f5', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ display: 'grid', width: '114rem', marginTop: '4rem', gridGap: '6rem', gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))', alignItems: 'start' }}>
        {users?.map((user, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              borderRadius: '4px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: '0.2s',
              width: '350px',
              maxWidth: '100%',
              margin: '0 auto',
              marginBottom: '20px',
            }}
          >
            <div style={{ display: 'block', width: '50%', height: '50%', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}>
              <img className="card__img" src={user.avatar} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h1 style={{ fontSize: '20px', fontWeight: '500', color: '#0d0d0d', marginBottom: '10px' }}>Name: {user.first_name}, {user.last_name}</h1>
              <p style={{ fontSize: '15px', color: '#3d3d3d', marginBottom: '10px' }}>Email: {user.email}</p>
              <p style={{ fontSize: '15px', color: '#3d3d3d', marginBottom: '10px' }}>Gender: {user.gender}</p>
              <p style={{ fontSize: '15px', color: '#3d3d3d', marginBottom: '10px' }}>Domain: {user.domain}</p>
              <button
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  fontSize: '15px',
                  textAlign: 'center',
                  color: '#3363ff',
                  backgroundColor: '#e6ecff',
                  border: 'none',
                  borderRadius: '4px',
                  transition: '0.2s',
                  cursor: 'pointer',
                  marginRight: '10px',
                }}
                onClick={() => handleEdit(user)}
              >
                Edit
              </button>
              <button
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  fontSize: '15px',
                  textAlign: 'center',
                  color: '#3363ff',
                  backgroundColor: '#e6ecff',
                  border: 'none',
                  borderRadius: '4px',
                  transition: '0.2s',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
