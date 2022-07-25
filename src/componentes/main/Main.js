import React from 'react'
import { Container } from './styles'
import { Routes, Route} from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Register from '../../pages/Register/Register'
import DetalleProducto from '../DetalleProducto/DetalleProducto'
import LogIn from '../../pages/Login/LogIn'
import Carrito from '../Carrito/Carrito'
const Main = () => {
  return (
    <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/detail/:id' element={<DetalleProducto/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
        </Routes>
    </Container>
  )
}

export default Main