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
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10)
  const [userId, setUserId] = useState('');
  const users = useSelector((state) => state.user.userDetails);
  console.log(users)

  useEffect(() => {
    // Fetch data from the server when the component mounts or when currentPage changes
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/getusers?page=${currentPage}&limit=${pageSize}`);
        dispatch(setUserDetails(data.result));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [currentPage, dispatch, pageSize]);
  const totalPages = Math.ceil(users.length / pageSize);
  const paginatedUsers = users.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const filteredUsers = users.filter((user) => !user.deleted);

  const handleEdit = (userdata) => {
    navigate('/edit', { state: { userdata } });
  };
  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSearchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/getuser/${userId}`);
      dispatch(setUserDetails([response.data])); // Assuming setUserDetails is an action
    } catch (error) {
      console.error('Error fetching user details:', error);
      dispatch(setUserDetails([])); // Set an empty array if user is not found or handle differently
    }
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
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <div className='header'>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={handleUserIdChange}
      />
      <button onClick={handleSearchUser}>Search</button>
      </div>
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
       <div>
      
       <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>{currentPage}</span>
          <button onClick={handleNextPage}>Next</button>
        </div>
  
    </div>
    </div>
    
    



    
  );
};

export default Home;
