import React, { useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../Redux/UserSlice';


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  //const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    domain: null,
    gender: null,
    availability: null,
  });
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.userDetails);
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate('/')
  }
  const handleCreateUser = () => {
    // Handle the logic to navigate to the create user page
    navigate('/createuser');
  };
  const handleSearchChange = (e) => {
    console.log(e.target)

    setSearchQuery(e.target.value);
    console.log(e.target)
    
    
    if (!users) {
      return; // Exit the function if users is undefined or null
    }
    const filtered = users.filter((user) => user.first_name.toLowerCase().includes(searchQuery));
    dispatch(setUserDetails(filtered));
  };
  
  

  return (
    <div className="navbar">

      

      {/* Search input */}
      <input
  type="text"
  placeholder="Search by Name"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>

      {/* Filters */}
      <div>
        <label>
          Domain:
          <input
            type="text"
            value={selectedFilters.domain || ''}
            // onChange={(e) => handleFilterChange('domain', e.target.value)}
          />
        </label>
        <label>
          Gender:
          <select
            value={selectedFilters.gender || ''}
            // onChange={(e) => handleFilterChange('gender', e.target.value)}
          >
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Availability:
          <select
            value={selectedFilters.availability || ''}
            // onChange={(e) => handleFilterChange('availability', e.target.value)}
          >
            <option value="">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </label>
      </div>

     {/* Create New User button */}
      <button onClick={handleCreateUser}>Create New User</button>

      {/* Create Team button */}
       <button >Create Team</button> 
       <button onClick={handleLogout}>Logout</button>

      {/* Team Details */}
      {/* {teamDetails && (
        <div>
          <h3>Team Details</h3>
          <ul>
            {teamDetails.map((user) => (
              <li key={user.id}>{user.first_name} {user.last_name}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
