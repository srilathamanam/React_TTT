
import './App.css';


import { useState } from 'react';
import InsertEmployee from './components/InsertEmployee';
import GetAllEmployees from './components/GetAllEmployees';
import UpdateEmployee from './components/UpdateEmployee';
import DeleteEmployee from './components/DeleteEmployee';

function App() {
 
  const [selectedOption, setSelectedOption] = useState("");

  const renderComponent = () => {
    switch (selectedOption) {
      case "view":
        return <GetAllEmployees />;
      case "insert":
        return <InsertEmployee/>;
      case "update":
        return <UpdateEmployee />;
      case "delete":
        return <DeleteEmployee />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="">Select an Option</option>
        <option value="view">Get Employees</option>
        <option value="insert">Insert Employee</option>
        <option value="update">Update Employee</option>
        <option value="delete">Delete Employee</option>
      </select>
      {renderComponent()}
    </div>
  );
};


export default App;
