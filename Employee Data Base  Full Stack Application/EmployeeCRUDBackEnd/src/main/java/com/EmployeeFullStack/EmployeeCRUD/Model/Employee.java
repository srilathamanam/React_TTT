package com.EmployeeFullStack.EmployeeCRUD.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Employees_Data")
public class Employee {
    @Id
    private int id;
    private String FirstName;
    private String LastName;
    private  int Sal;

}
