import axios from 'axios'

const EMPLOYEE_REST_API_URL = 'http://192.168.201.8:8080/api/empcrud';


 class EmployeeOpeartions  {
    getAllEmployees(){
        return axios.get(EMPLOYEE_REST_API_URL)
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_REST_API_URL, employee)
    }

   

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_REST_API_URL + '/' +employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_REST_API_URL + '/' + employeeId);
    }
 
        
}

export default new EmployeeOpeartions();

