import React from 'react'
import { Link } from 'react-router-dom'
import { addCart } from '../components/features/cart/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import '../../src/components/style/Products__modules.css'




const Products = ({id,price,title,image01,image02,image03}) => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.cart)
  console.log(products)
  return (
     <div className="single__product">
        <div className="image__content" key={id}>
            <img src={image01} alt={title} />
           <Link to={`/Food/${id}`} className='link'>{title}</Link>
        </div>
        <div className="product__content">
            <span>${price}</span>
            <button type="button" onClick={()=>dispatch(addCart({
              id,
              title,
              image01,
              image02,
              image03,
              price,
            }))}>add to cart</button>
        </div>
    </div>
  )
}

export default Products