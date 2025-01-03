import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated hook

const ManageBranch = ({ branches = [] }) => {  // Ensure branches defaults to an empty array
  const navigate = useNavigate();
  const [newBranch, setNewBranch] = useState({
    branchName: "",
    code: "",
    shortName: "",
    city: "",
    state: "",
    contact: "",
    pan: "",
    gstin: "",
    status: "Active",
  });
  const [isAddingBranch, setIsAddingBranch] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBranch((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddBranch = () => {
    // Logic to add the new branch (e.g., API call or state update)
    console.log("New Branch Added:", newBranch);
    setIsAddingBranch(false); // Exit add mode
  };

  const handleDiscard = () => {
    setIsAddingBranch(false); // Exit add mode
    navigate("/branches"); // Navigate back to the branch list page using useNavigate
  };

  return (
    <div>
      <button onClick={() => setIsAddingBranch(true)}>Add New Branch</button>
      {isAddingBranch && (
        <div>
          <h3>Add New Branch</h3>
          <form>
            <input
              type="text"
              name="branchName"
              placeholder="Branch Name"
              value={newBranch.branchName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="code"
              placeholder="Branch Code"
              value={newBranch.code}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="shortName"
              placeholder="Short Name"
              value={newBranch.shortName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={newBranch.city}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={newBranch.state}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={newBranch.contact}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="pan"
              placeholder="PAN"
              value={newBranch.pan}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="gstin"
              placeholder="GSTIN"
              value={newBranch.gstin}
              onChange={handleInputChange}
            />
            <select
              name="status"
              value={newBranch.status}
              onChange={handleInputChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <button type="button" onClick={handleAddBranch}>
              Save Branch
            </button>
            <button type="button" onClick={handleDiscard}>
              Discard Changes
            </button>
          </form>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Branch Name</th>
            <th>Branch Code</th>
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
          {branches.length > 0 ? (
            branches.map((branch, index) => (
              <tr key={branch.code}>
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

export default ManageBranch;
