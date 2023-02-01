import React from 'react'
import './Student.css'
import { Link } from 'react-router-dom'
const Editstudent = () => {
  return (
    <div>
      <div className='addtask'>
      <input type="text" name='Name' className='txt' placeholder='Enter Name' />
      <input type="number" name='Age'  className='txt' placeholder='Enter Age'  />
      <input type="text" name='Course'  className='txt' placeholder='Enter Course' />
      <input type="text" name='Batch' className='txt' placeholder='Enter Batch'  />
      </div>
      <div className='addtask'> 
      <Link to='/second'><button className='btn'>Cancel</button></Link> <button  className='btn'>Update</button> 
      </div>
    </div>
  )
}

export default Editstudent
