import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BranchPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [branches] = useState([
    {
      id: 1,
      branchName: 'SPL - CORPORATE',
      code: 'C001',
      shortName: 'SPL',
      city: 'Chennai',
      state: 'TAMIL NADU',
      incharge: 'S SRINIVASAN',
      contact: '9940093856',
      pan: 'AAACS4949P',
      gstin: '33AAACS4949P1ZU',
      status: 'Active',
    },
    {
      id: 2,
      branchName: 'CHENNAI',
      code: 'B001',
      shortName: 'CHN',
      city: 'Chennai',
      state: 'TAMIL NADU',
      incharge: '',
      contact: '',
      pan: 'AAACS4949P',
      gstin: '27AAACS4949P1ZN',
      status: 'Active',
    },
  ]);

  const filteredBranches = branches.filter(branch =>
    branch.branchName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddBranch = () => {
    navigate('/master/branch/manage');
  };

  return (
    <div className="branch-page">
      <div className="branch-header">
        <h1>Branch</h1>
        <button className="add-branch-btn" onClick={handleAddBranch}>
          +
        </button>
      </div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Branch Name</th>
            <th>Code</th>
            <th>Short Name</th>
            <th>City</th>
            <th>State</th>
            <th>Contact</th>
            <th>PAN</th>
            <th>GSTIN</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredBranches.length > 0 ? (
            filteredBranches.map((branch, index) => (
              <tr key={branch.id}>
                <td>{index + 1}</td>
                <td>{branch.branchName}</td>
                <td>{branch.code}</td>
                <td>{branch.shortName}</td>
                <td>{branch.city}</td>
                <td>{branch.state}</td>
                <td>{branch.contact}</td>
                <td>{branch.pan}</td>
                <td>{branch.gstin}</td>
                <td>{branch.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10">No branches found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BranchPage;
