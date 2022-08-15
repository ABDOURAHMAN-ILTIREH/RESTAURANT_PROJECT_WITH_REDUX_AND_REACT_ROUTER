import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Register from '../Pages/Register'

const RegisterRouter = () => {
  return (
      <Routes>
        <Route path='/Register' element={<Register/>} />
      </Routes>
      )
      
}

export default RegisterRouter