import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
            </tbody>
        </table>
    </div>
    
  )
}
