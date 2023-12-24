package jb.hr.controller;

import jb.hr.service.EmployeeService;
import jb.hr.service.IEmployeeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//htpp://localhost:8080/hr-app/
@RequestMapping("hr-app")
@CrossOrigin(value = "http://localhost:3000")
public class EmployeeController {
    private static final Logger logger=
        LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    private IEmployeeService employeeService;
}
