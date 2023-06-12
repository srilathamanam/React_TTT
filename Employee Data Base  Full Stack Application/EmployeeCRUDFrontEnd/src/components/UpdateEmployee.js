import React, { useState } from 'react';
import EmployeeOpeartions from '../operations/EmployeeOpeartions';
import '../styles/Updatepage.css'
function UpdateEmployee() {
  const [employeeId, setEmployeeId] = useState('');
  const [employeefirstName, setemployeefirstName] = useState('');
  const [employeeLastName, setEmployeeLastName] = useState('');
  const [employeeSal, setEmployeeSal] = useState('');

  const handleUpdate = () => {
    const updatedEmployee = {
      firstName: employeefirstName,
      lastName: employeeLastName,
      sal: employeeSal
    };

    EmployeeOpeartions.updateEmployee(employeeId, updatedEmployee)
      .then(response => {
        console.log('Employee updated successfully');
        // Handle any other logic after successful update
      })
      .catch(error => {
        console.error('Error updating employee:', error);
        // Handle any error or display an error message to the user
      });
  };

  return (
    <div className="update-employee-container">
      <h2>Update Employee</h2>
      <label htmlFor="employeeId">Employee ID:</label>
      <input
        type="text"
        id="employeeId"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <label htmlFor="employeefirstName">Employee FirstName:</label>
      <input
        type="text"
        id="employeefirstName"
        value={employeefirstName}
        onChange={(e) => setemployeefirstName(e.target.value)}
      />
       <label htmlFor="employeeLastName">Employee LastName:</label>
      <input
        type="text"
        id="employeeLastName"
        value={employeeLastName}
        onChange={(e) => setEmployeeLastName(e.target.value)}
      />
      <label htmlFor="employeeSal">Employee Salary:</label>
      <input
        type="text"
        id="employeeSal"
        value={employeeSal}
        onChange={(e) => setEmployeeSal(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateEmployee;