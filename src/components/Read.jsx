import React, { useState, useEffect } from 'react'; 
import { NavLink } from 'react-router-dom';
import { userOperation } from '../services/userOperation';

const Read = ({ updateUserList }) => {
  const [list, setList] = useState(userOperation.getUsers());

  useEffect(() => {
    setList(userOperation.getUsers());
  }, [userOperation.getUsers()]);

  const deleteUser = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
    userOperation.deleteUser(index);
    updateUserList();
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">User List</h1>
        <NavLink to="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add User
          </button>
        </NavLink>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg table-fixed">
          <thead>
            <tr className="w-full bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-4 w-1/4">Name</th>
              <th className="py-3 px-4 w-1/4">Email</th>
              <th className="py-3 px-4 w-1/4">Phone Number</th>
              <th className="py-3 px-4 w-1/4"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {list.length > 0 ? (
              list.map((user, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{user.phoneNo}</td>
                  <td className="py-3 px-4 flex gap-2">
                    <button
                      onClick={() => deleteUser(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                    <NavLink to={`/edit/${index}`}>
                      <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                        Edit
                      </button>
                    </NavLink>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Read;










