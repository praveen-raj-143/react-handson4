import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../components/Home'
import Student from '../components/Student'
import Contact from '../components/Contact'
import Addstudent from '../components/Addstudent'
import Editstudent from '../components/Editstudent'

  const Routesfile = () => {
  return (
    <Routes>
      
      <Route path='/' element={<Home/>} />
      <Route path='/second' element={<Student/>} />
      <Route path='/third' element={<Contact/>} />
      <Route path='/fourth' element={<Addstudent/>}/>
      <Route path='/fifth' element={<Editstudent/>} />
    </Routes>
  )
}

export default Routesfile
