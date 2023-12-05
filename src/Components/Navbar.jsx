import React, { useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    domain: null,
    gender: null,
    availability: null,
  });

  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate('/')
  }
  return (
    <div className="navbar">

      

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by Name"
        value={searchQuery}
        // onChange={handleSearchChange}
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
