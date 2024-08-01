import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import { userOperation } from './services/userOperation';
import UpdateUser from './components/UpdateUser';

const App = () => {
  const [users, setUsers] = useState(userOperation.getUsers());

  // Function to update the user list
  const updateUserList = () => {
    setUsers(userOperation.getUsers());
  };

  useEffect(() => {
    updateUserList();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Create addUser={updateUserList} />} />
          <Route path="/read" element={<Read updateUserList={updateUserList} />} />
          <Route path="/edit/:index" element={<UpdateUser onSave={updateUserList} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




