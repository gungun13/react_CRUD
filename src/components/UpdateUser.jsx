import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { userOperation } from '../services/userOperation';

const UpdateUser = ({ onSave }) => {
  const { index } = useParams();
  const navigate = useNavigate();
  
  const [user, setUser] = useState({ name: '', email: '', phoneNo: '' });

  useEffect(() => {
    const userToEdit = userOperation.getUsers()[index];
    setUser(userToEdit || { name: '', email: '', phoneNo: '' });
  }, [index]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    userOperation.users[index] = user; // Update the user in the data source
    onSave(); // Refresh the user list
    navigate('/read'); // Redirect to the read page
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update User</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
        <input 
          type="text" 
          name="name" 
          value={user.name} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email" 
          value={user.email} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNo">Phone Number</label>
        <input 
          type="text" 
          name="phoneNo" 
          value={user.phoneNo} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button 
        onClick={handleSubmit} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Save
      </button>
    </div>
  );
};

export default UpdateUser;




