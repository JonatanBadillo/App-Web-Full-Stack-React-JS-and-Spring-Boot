import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';

export default function ListEmployees() {

    const urlBase = "http://localhost:8080/hr-app/employees";

    const[employees, setEmployees] = useState([]);

    useEffect(() => {
        loadEmployees();
    },[]);

    const loadEmployees = async() => {
        const result = await axios.get(urlBase);
        console.log("Result of load employees");
        console.log(result.data)
        setEmployees(result.data)
    }

  return (
    <div className='container'>
        <div className='container text-center' style={{margin: "30px"}}>
    <h3>
        Human Resources System
    </h3>
        </div>

        <table className="table table-striped table-hover align-middle">
            <thead className='table-dark'>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Employee</th>
                <th scope="col">Department</th>
                <th scope="col">Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    // Iterate employees array
                    employees.map((employee,index) => (
                        <tr key={index}>
                        <th scope="row">{employee.idEmployee}</th>
                        <td>{employee.name}</td>
                        <td>{employee.department}</td>
                        <td><NumericFormat value={employee.salary}displayType={'text'}
                        thousandSeparator=',' prefix={'$'}
                        decimalScale={2} fixedDecimalScale/>
                        </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    
  )
}
