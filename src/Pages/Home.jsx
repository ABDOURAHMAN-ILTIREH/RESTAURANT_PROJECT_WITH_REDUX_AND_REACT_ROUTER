import React,{useState,useEffect} from 'react'
import '../../src/components/style/Home__modules.css'
import '../../src/components/style/Products__modules.css'

import hero from '../../src/assets/images/hero.png'
import { Container } from 'react-bootstrap'
import {FaCar} from 'react-icons/fa'
import {MdSecurity} from 'react-icons/md'

import catagory1 from '../../src/assets/images/category-01.png'
import catagory2 from '../../src/assets/images/category-02.png'
import catagory3 from '../../src/assets/images/category-03.png'
import catagory4 from '../../src/assets/images/category-04.png'

import service1  from '../../src/assets/images/service-01.png'
import service2 from '../../src/assets/images/service-02.png'
import service3 from '../../src/assets/images/service-03.png'

import Products from './Products'
import productsDT from '../assets/fake-data/products'

import '../../src/components/style/Products__modules.css'


import burger from '../../src/assets/images/hamburger.png'
import pizza from '../../src/assets/images/pizza.png'
import breade from '../../src/assets/images/bread.png'


const Home = () => {

  const [category, setCatagory] = useState('ALL');
  const [allProduct, setAllProduct] = useState(productsDT); 

  useEffect(() => { 
      
    if(category === 'ALL'){
      setAllProduct(productsDT)
    }

    if(category === 'BURGER'){
       const  filteredProuduct = productsDT.filter(itme => itme.category === 'Burger');
       setAllProduct(filteredProuduct)
    }

    if(category === 'PIZZA'){
       const  filteredProuduct = productsDT.filter(itme => itme.category === 'Pizza');
       setAllProduct(filteredProuduct)
    }

    if(category === 'BREAD'){
       const  filteredProuduct = productsDT.filter(itme => itme.category === 'Bread');
       setAllProduct(filteredProuduct)
    }
      
  },[category]);
    
  const Foods__displays = [
    {
      id:1,
      img: catagory1,
      text:'Fast Foods'
    },
    {
      id:2,
      img: catagory2,
      text:'Pizza'
    },
    {
      id:3,
      img: catagory3,
      text:'Asians Foods'
    },
    {
      id:4,
      img: catagory4,
      text:'Row Meals '
    },
  ]
  const Service__Design = [
    {
      id: 1,
      img: service1,
      title:"quick delivery",
    },
    {
      id: 2,
      img: service2,
      title:"super dine in",
    },
    {
      id: 3,
      img: service3,
      title:"easy pick up",
    },
  ]


  



  return (
    <Container>
        <section className="home__contente">
          <div className="content__left">
              <h4>easy way to make an order</h4>
              <h2><span>hungray</span>?just wait <br />food at <span>your door</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repudiandae consequatur eius illum iure minus.</p>
              <div className="button__order">
                 <button className="order__now">order now</button>
                 <button className="BtnFood">see all foods</button>
              </div>
              <div className='details__wrapper'>
                 <p><FaCar className='img' /> no shipping charge</p>
                 <p><MdSecurity className='img' /> 100% secure checkout </p>
              </div>
          </div>
             <div className="content__right">
               <img src={hero} alt="hero" />
             </div>
        </section>
        <article className='display__foods'>
               <div className='grid__display'>
                 {
                   Foods__displays.map(itme =>(
                     <div className="cols">
                        <img src={itme.img} alt="" />
                        <p>{itme.text}</p>
                    </div>
                   ))
                 }
              </div>
        </article>
        <section className='serve__wrapper'>
            <div className="content__design">
                <h4>what we serve</h4>
                <h2>just sit back at home <br />we will<span> take care</span></h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, voluptas?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, voluptas?</p>
            </div>
            <div className="design__grid">
              {
                Service__Design.map( itme =>(
                  <div className="service__design" key={itme.id}>
                    <img src={itme.img} alt="service1" />
                    <h4>{itme.title}</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Veniam, alias!</p>
                  </div>
                ))
              }
            </div>
        </section>
        <section className='Product__foods'>
      <h1>popular foods</h1>
      <div className="foods__container">
         <button className={`all__food ${category === 'ALL' ?'active__foods' : ''}`}
         onClick={()=>setCatagory('ALL')}
         >All</button>
         <button
         onClick={()=>setCatagory('BURGER')}
         className={`${category === 'BURGER' ?'active__foods' : ''}`}
         >
           <img src={burger} alt="burger" />
           <p>Burger</p>
         </button>
         <button  
         onClick={()=>setCatagory('PIZZA')}
         className={`${category === 'PIZZA' ?'active__foods' : ''}`}
         >
           <img src={pizza} alt="pizza" />
           <p>Pizza</p>
         </button>
         <button
         onClick={()=>setCatagory('BREAD')}
         className={`${category === 'BREAD' ?'active__foods' : ''}`}
         >
           <img src={breade} alt="bread" />
           <p>Breade</p>
         </button>
      </div>
      
     <article className='prducts__wrapper'> 
       {
        allProduct.map( (itme) => (
          <Products key={itme.id} {...itme} />
        ))
       }
     </article>
    </section>
      </Container>
  )
}
export default Home