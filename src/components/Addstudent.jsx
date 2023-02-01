import React from 'react'
import { useState } from 'react'
import './Student.css'
import { Link } from 'react-router-dom'

const Addstudent = () => {
    const [a,seta] = useState(true);
    const [b,setb] =useState({
        Name:'',
        Age:'',
        Course:'',
        Batch:'',
        person:[]
    })

    const changecontant =(e)=>{
        setb({...b, [e.target.name] : [e.target.value]})
    }

    function task(){
        seta(!a)
        const abdObj={
            Name:b.Name,
            Age:b.Age,
            Course:b.Course,
            Batch:b.Batch
            
        }
        const temp=b.person
        temp.push(abdObj)
        setb({person:temp})
    }

  return (
    <div className='pos'>
      <div className='addtask'>
      <input type="text" name='Name' value={b.Name} onChange={changecontant} className='txt' placeholder='Enter Name' />
      <input type="number" name='Age' value={b.Age} onChange={changecontant} className='txt' placeholder='Enter Age'  />
      <input type="text" name='Course' value={b.Course} onChange={changecontant} className='txt' placeholder='Enter Course' />
      <input type="text" name='Batch' value={b.Batch} onChange={changecontant} className='txt' placeholder='Enter Batch'  />
      </div>
      <div className='addtask'> 
        <Link to='/second'><button className='btn'>Cancel</button></Link> <button onClick={task} className='btn'>Submit</button> 
      </div>
    </div>
  )
}

export default Addstudent
