import React from 'react'
import '../components/style/Cart__modules.css'
import {FaTrash} from 'react-icons/fa'
import { useDispatch} from 'react-redux'
import { increase, decrease,removeProducts } from '../components/features/cart/CartSlice'




const CartTable = ({title,price,image01,image02, image03,amount,id}) => {
 const dispatch = useDispatch()
  return (
   <>
       <tr>
              <td>
                <img src={image01} alt="image01" />
                {/* <img src={image02} alt="image02" />
                <img src={image03} alt="image03" /> */}
              </td>
              <td>{title}</td>
              <td>${price}</td>
              <td>
                <button
                onClick={() =>{
                    if(amount === 1){
                        dispatch(removeProducts(id))
                        return
                    }
                    dispatch(decrease({id}))
                }}
                >-</button>
                <span>{amount}</span>
                <button
                onClick={() => dispatch(increase({id}))}
                >+</button>
              </td>
              <td>
                  <FaTrash className='trash__icons'
                  onClick={() => dispatch(removeProducts(id))}
                  />
              </td>
            </tr>
   </>
  )
}

export default CartTable