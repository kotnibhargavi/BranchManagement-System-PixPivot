import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Dashboard from './Dashboard';
import Branch from './Master/branch';
import ManageBranch from './Manage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/master/branch" element={<Branch />} />
        <Route path="/master/branch/manage" element={<ManageBranch />} />
      </Routes>
    </Router>
  );
};

export default App;
