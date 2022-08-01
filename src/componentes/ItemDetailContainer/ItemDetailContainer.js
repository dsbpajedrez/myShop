import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ctxProducto } from '../../contextos/CarritoContexto'
import GetItem from '../../hooks/useProductById'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Boton, Container, LeftContainer} from './style'
import ItemCount from '../Counter/ItemCount'

const ItemDetailContainer = () => {
    const {addToCart} = useContext(ctxProducto)   
    const id= useParams().id
    const product = GetItem(id)  
    console.log(product);
    return (
        <>
       {product &&
      
        <Container>
            <ItemDetail
            pointer='false'
            title={product?.title ?? ''}
            price={product?.price ?? 0}
            images={product?.images ?? []}
            id={product?.id ?? ''}
            />
            <LeftContainer>
                <ItemCount 
                initial={0}
                stock={3}
                producto={product}/>
                <Boton onClick={()=>{
                    if(product.cantidad>0) addToCart(product)                    
                    }}>Add to cart</Boton>
            </LeftContainer>
        </Container>
           
      

         }  
        </>
    )
    }

export default ItemDetailContainer