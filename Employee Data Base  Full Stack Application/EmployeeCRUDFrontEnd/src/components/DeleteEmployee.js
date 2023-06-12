import React, { useState } from 'react';
import EmployeeOpeartions from '../operations/EmployeeOpeartions';

function DeleteEmployee() {
  const [employeeId, setEmployeeId] = useState('');

  const handleDelete = () => {
    EmployeeOpeartions .deleteEmployee(employeeId)
          .then(response => {
        console.log('Employee deleted successfully');
        // Handle any other logic after successful deletion
      })
      .catch(error => {
        console.error('Error deleting employee:', error);
        // Handle any error or display an error message to the user
      });
  };

  return (
    <div>
      <h2>Delete Employee</h2>
      <label htmlFor="employeeId">Employee ID:</label>
      <input
        type="text"
        id="employeeId"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default DeleteEmployee;