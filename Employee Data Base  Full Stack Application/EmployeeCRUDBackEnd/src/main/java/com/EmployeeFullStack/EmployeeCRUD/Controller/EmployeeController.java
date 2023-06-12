package com.EmployeeFullStack.EmployeeCRUD.Controller;

import com.EmployeeFullStack.EmployeeCRUD.Exception.EmployeeNotFoundException;
import com.EmployeeFullStack.EmployeeCRUD.Model.Employee;
import com.EmployeeFullStack.EmployeeCRUD.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://192.168.201.8:3000/")
@RestController
@RequestMapping("/api/empcrud")
public class EmployeeController {
    @Autowired
	private EmployeeRepository employeeRepository;
    @GetMapping
    public List<Employee> getAllEmployees()
    {
        return employeeRepository.findAll();
    }
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee emp) {
        Employee updateEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not exist with id: "));

        updateEmployee.setFirstName(emp.getFirstName());
        updateEmployee.setLastName(emp.getLastName());
        updateEmployee.setSal(emp.getSal());

        employeeRepository.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable String id){
        int Id= Integer.parseInt(id);
        Employee employee = employeeRepository.findById(Id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not exist with id: " ));

        employeeRepository.delete(employee);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }


}
