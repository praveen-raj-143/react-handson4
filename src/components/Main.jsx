import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <div className='navbar'>
      <Link to='/'><p className='bar'>Home</p></Link>
      <Link to='/second'><p className='bar'>Student</p></Link>
      <Link to='/third'><p className='bar'>Contant</p></Link>
      </div>
    </div>
  )
}

export default Main
