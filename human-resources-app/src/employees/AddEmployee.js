import React from 'react'

export default function AddEmployee() {
  return (
    <div className='container'>
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Add Employee</h3>
        </div>
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name='name' required={true}/>
            </div>
            <div className="mb-3">
                <label htmlFor="department" className="form-label">Department</label>
                <input type="text" className="form-control" id="department" name='department'/>
            </div>
            <div className="mb-3">
                <label htmlFor="salary" className="form-label">Salary</label>
                <input type="number" step="any" className="form-control" id="salary" name='salary'/>
            </div>

            <div className='center'>
                <button type="submit" className="btn btn-warning btn-sm me-3">Add</button> 
                <a href='/' className='btn btn-danger btn-sm'>Return</a> 
            </div>    

            
        </form>
    </div>
  )
}
