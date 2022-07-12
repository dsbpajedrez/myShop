import React from 'react'
import Productos from '../../componentes/productos/Productos'
import useLlamadoAPI from '../../hooks/useLlamadoAPI'
import { Titulo } from './styles'

const Home = () => {
  const API_PRODUCTS ='https://api.escuelajs.co/api/v1/products'
  const pasarelaProductos = useLlamadoAPI(API_PRODUCTS)
  return (
    <div>
      <Titulo>Nuestros Productos</Titulo>
      <Productos products={pasarelaProductos}/>

    </div>
  )
}

export default Home