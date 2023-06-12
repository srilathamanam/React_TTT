import React, { useState } from 'react';
import EmployeeOpeartions from '../operations/EmployeeOpeartions';
const InsertEmployee = () => {
  const [employee, setEmployee] = useState({
    id:0,
    firstName: '',
    lastName: '',
    sal: 0
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    EmployeeOpeartions .createEmployee(employee)
      .then((response) => {
        console.log(response.data);
        // Reset the form after successful submission
        setEmployee({
          id: 0,
          firstName: '',
          lastName: '',
          sal: 0
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Insert Employee</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="Id">Id</label>
          <input
            type="number"
            className="form-control"
            id="id"
            name="id"
            value={employee.id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={employee.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={employee.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sal">Salary</label>
          <input
            type="number"
            className="form-control"
            id="sal"
            name="sal"
            value={employee.sal}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Insert
        </button>
      </form>
    </div>
  );
};

export default InsertEmployee;
