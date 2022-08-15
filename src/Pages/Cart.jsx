import React from 'react'
import '../components/style/Cart__modules.css'
import CartTable from './CartTable'
import { Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

const Cart = () => {

  const {products,total} = useSelector(state =>state.cart);
  const dispatch = useDispatch()
  
  console.log(total,products)

  
  if(total ===  0){
    return(
      <Container>
   <section className='cart__container'>
       <div className="cart__wrapper">
         <div className="table__wrapper">
               <h2>your shopping cart is blank</h2>
         </div>
         <div className="content__checkout">
          <h6>subtotal:$<span>{total}</span></h6>
          <p>taxe and shipping will calculate in the checkout</p>
          <div className="buttons__form">
            <button>continue shopping</button>
            <button>
              <Link to='/checkbox'>proceed to checkout</Link>
            </button>
          </div>
         </div>
       </div>
   </section>
    </Container>
    )
  }

  return (
    <Container>
   <section className='cart__container'>
       <div className="cart__wrapper">
         <div className="table__wrapper">
         <table>
          <thead>
            <tr>
              <td>image</td>
              <td>product title</td>
              <td>price</td>
              <td>quantity</td>
              <td>delete</td>
            </tr>
          </thead>
          <tbody>
            {
              products.map(product =>(
                <CartTable key={product.id}  {...product}/>
              ))
            }
          </tbody>
         </table>
         </div>
         <div className="content__checkout">
          <h6>subtotal:$<span>{total}</span></h6>
          <p>taxe and shipping will calculate in the checkout</p>
          <div className="buttons__form">
            <button>continue shopping</button>
            <button>
              <Link to='/checkbox'>proceed to checkout</Link>
            </button>
          </div>
         </div>
       </div>
   </section>
    </Container>
  )
}

export default Cart