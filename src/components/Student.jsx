import React from 'react'
import './Student.css'
import { Link } from 'react-router-dom'


const Student = () => {
  return (
    <div>
      <div className='container'>
        <p className='item'>Students Details</p>
        <Link to='/fourth'><button className='item1'>Add New Student</button></Link>
      </div>
      <div>
        <table className='table '>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
          <tr>
            <td>Itachi</td>
            <td>20</td>
            <td>Uchiha</td>
            <td>Akatsuki</td>
            <td><Link to='/fifth'><p>Edit</p></Link></td>
          </tr>
          <tr>
            <td>Suske</td>
            <td>15</td>
            <td>Uchiha</td>
            <td>team 7</td>
            <td><Link to='/fifth'><p>Edit</p></Link></td>
          </tr>
          <tr>
            <td>Obito</td>
            <td>22</td>
            <td>Uchiha</td>
            <td>team minato</td>
            <td><Link to='/fifth'><p>Edit</p></Link></td>
          </tr>
          <tr>
            <td>Madara</td>
            <td>40</td>
            <td>Uchiha</td>
            <td>founder</td>
            <td><Link to='/fifth'><p>Edit</p></Link></td>
          </tr>
          
        </table>
      </div>
    </div>
  )
}

export default Student
