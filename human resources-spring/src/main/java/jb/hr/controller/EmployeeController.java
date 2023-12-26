package jb.hr.controller;

import jb.hr.exception.ResourseNotFoundException;
import jb.hr.model.Employee;
import jb.hr.service.EmployeeService;
import jb.hr.service.IEmployeeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.relation.RelationServiceNotRegisteredException;
import java.util.List;

@RestController
//htpp://localhost:8080/hr-app/
@RequestMapping("hr-app")
@CrossOrigin(value = "http://localhost:3000")
public class EmployeeController {
    private static final Logger logger=
        LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    private IEmployeeService employeeService;
    // htpp://localhost:8080/hr-app/employees
    @GetMapping("/employees")
    public List<Employee> obtainEmployees(){
        var employees = employeeService.listEmployees();
        employees.forEach(employee -> logger.info(employee.toString()));
        return employees;
    }

    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee employee){
        logger.info("Employee to add: " + employee);
        return employeeService.saveEmployee(employee);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> obtainEmployeeById(@PathVariable Integer id){
        Employee employee = employeeService.searchEmployeeById(id);
        if(employee == null)
            throw new ResourseNotFoundException("Couldn't find the id: " + id);
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Integer id, @RequestBody Employee receivedEmployee){
        Employee employee = employeeService.searchEmployeeById(id);
        if(employee == null)
            throw new ResourseNotFoundException("The received id doesn't exist: " + id);
        employee.setName(receivedEmployee.getName());
        employee.setDepartment(receivedEmployee.getDepartment());
        employee.setSalary(receivedEmployee.getSalary());
        employeeService.saveEmployee(employee);
        return ResponseEntity.ok(employee);
    }
}
