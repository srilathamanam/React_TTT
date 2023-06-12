package com.EmployeeFullStack.EmployeeCRUD.Repository;

import com.EmployeeFullStack.EmployeeCRUD.Model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
}
