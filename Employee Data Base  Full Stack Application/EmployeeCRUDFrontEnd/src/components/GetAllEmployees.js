import React from 'react'
import EmployeeOpeartions from '../operations/EmployeeOpeartions';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
/*import { Link } from 'react-router-dom'*/
const GetAllEmployees = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {

        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        EmployeeOpeartions.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
   /* const getAllEmployees = () => {
        axios
          .get("http://localhost:8080/retrive") 
          .then((response) => {
            setEmployees(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };*/
    return (
        <div className = "container">
        <h2 className = "text-center"> List of Employees </h2>
       
        <table className="table table-bordered table-striped">
            <thead>
                <th> Employee Id </th>
                <th> Employee First Name </th>
                <th> Employee Last Name </th>
                <th> Employee Sal </th>
               
            </thead>
            <tbody>
                {
                    employees.map(
                        employee =>
                        <tr key = {employee.id}> 
                            <td> {employee.id} </td>
                            <td> {employee.firstName} </td>
                            <td>{employee.lastName}</td>
                            <td>{employee.sal}</td>
                           
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
)
}



export default GetAllEmployees;
