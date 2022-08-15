import React from 'react'
import { Container } from 'react-bootstrap'
import productsDT from '../assets/fake-data/products';
import  Products from '../Pages/Products'

import "../components/style/Home__modules.css"
import "../components/style/Products__modules.css"
const FoodDetails = () => {
  return (
   <Container>
        <article className='prducts__wrapper'> 
          {
            productsDT.map( (itme) => (
              <Products key={itme.id} {...itme} />
            ))
          }
        </article>
   </Container>
  )
}

export default FoodDetails