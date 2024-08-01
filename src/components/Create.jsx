import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userOperation } from '../services/userOperation';

const Create = ({ addUser }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let formErrors = {};
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;

    if (!name.trim()) {
      formErrors.name = 'Name is required';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      formErrors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      formErrors.email = 'Invalid Email';
    }

    const phonePattern = /^\d{10}$/;
    if (!phone) {
      formErrors.phone = 'Phone number is required';
    } else if (!phonePattern.test(phone)) {
      formErrors.phone = 'Invalid Phone Number';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleAddUser = () => {
    if (validate()) {
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const phoneNo = phoneRef.current.value;

      userOperation.addUser(name, email, phoneNo);
      addUser(); // Update the user list
      navigate('/read');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Create User</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            ref={nameRef}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            ref={emailRef}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Phone No</label>
          <input
            type="text"
            ref={phoneRef}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
        </div>
        <button
          onClick={handleAddUser}
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default Create;






