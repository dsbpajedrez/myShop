import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListaProductos = styled.ul`
    position:absolute;
    width:35rem;
    top:80px;
    right:0;
    height:100%;
    background-color:var(--azul-claro);
    z-index:150;
    padding:0.5rem;
    border-radius:1rem;
    height:fit-content;

`
export const ItemProducto = styled.li`
    display:flex;
    justify-content:space-between;
    color:var(--soft-white);
`
export const ContenedorImagenes = styled.div`
    display:flex;

`
export const Bottom = styled.div` 
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const BotonCarrito = styled(Link)`
    padding:1rem;
    background-color:var(--verde-claro);
    border-radius:1rem;
    width:fit-content;
    height:fit-content;
    text-decoration:none;
    color:var(--soft-white);
`
