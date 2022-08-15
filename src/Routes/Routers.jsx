import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import Home from '../Pages/Home'
import Foods from '../Pages/Foods'
import  Cart from '../Pages/Cart'
import Checkbox from '../Pages/Checkbox'
import Contact from '../Pages/Contact'
import FoodsContainer from '../Pages/FoodsContainer'



const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/Home'/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/Foods' element={<Foods/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Checkbox' element={<Checkbox/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Food/:id' element={<FoodsContainer/>} />
    </Routes>
    )
}

export default Routers