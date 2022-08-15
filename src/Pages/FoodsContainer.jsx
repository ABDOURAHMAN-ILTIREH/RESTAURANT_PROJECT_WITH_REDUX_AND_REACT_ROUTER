import React,{useState,useEffect} from 'react'
import image from '../../src/assets/images/product_01.jpg'
import { Container } from 'react-bootstrap'
import '../components/style/Foods__container.css'
import productsDT from '../../src/assets/fake-data/products'
import {useParams}  from 'react-router-dom'
import Foods from '../Pages/Foods'
import Products from '../Pages/Products'
import {Link} from 'react-router-dom'
import { addCart } from '../components/features/cart/CartSlice'
import { useDispatch, useSelector } from 'react-redux'

const FoodsContainer = () => {
    const {id}  = useParams()
    const product = productsDT.find((product)=> product.id === id)
    const [previows, setPreviows] = useState(product.image01)
    
    const {title, desc, image01, price, category,image03, image02} = product;

    const dispatch = useDispatch();
    // const {products} = useSelector(state => state.cart)

    const relatedProducts = productsDT.filter((itme)=> category === itme.category);
    console.log(relatedProducts)

    useEffect(()=>{
       setPreviows(product.image01)
    },[product])

    return (
    <Container>
        <section>
            <article>
                <div className="first__container">
                    <div className="sumalery__image">
                       <div onClick={()=> setPreviows(product.image01)}>
                       <img src={product.image01} alt="" />
                       </div>
                       <div  onClick={()=> setPreviows(product.image02)}>
                       <img src={product.image02} alt="" />
                       </div>
                        <div  onClick={()=> setPreviows(product.image03)}>
                        <img src={product.image03} alt="" />
                        </div>
                    </div>
                    <div className="header__image">
                        <img src={previows} alt="" />
                    </div>
                    <div className="desription__foods">
                        <div>
                            <h2>{title}</h2>
                            <p id='price'>price: <span>${price}</span></p>
                            <p id='category'>category: <span>{category}</span></p>
                        </div>
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
                    <div className="description__section">
                            <h4>description</h4>
                            <hr />
                        <p>{desc}</p>
                    </div>
                <div className="simulary__container">
                   <div className="title">
                      <h3>you might also like</h3>
                      <div className="article">
                        {
                        relatedProducts.map((itme)=>(
                            <Products key={itme.id} {...itme} />
                        ))
                        }
                      </div>
                 </div>
               </div>
            </article>
        </section>
    </Container>
  )
}

export default FoodsContainer