import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import productsDT from '../assets/fake-data/products';
import  Products from './Products'
import {FaSearch} from 'react-icons/fa'

import "../components/style/Home__modules.css"
import "../components/style/Products__modules.css"
const Allfoods = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
   <Container>
      <div className="container__search">
         <div className="search__wrapper">
            <input type="text" placeholder='i am looking for.....' onChange={(e)=>setSearch(e.target.value)}/>
            <FaSearch />
         </div>
         <select name="" id="">
          <option value="default">default</option>
          <option value="alphabetical">alphabetical A-Z</option>
          <option value="hight_price">hight price</option>
          <option value="low_price">low price</option>
         </select>
      </div>
      <article className='prducts__wrapper'> 
          {
            productsDT.filter((itme)=>{
              return search.toLocaleLowerCase() === '' ? itme: itme.title.toLocaleLowerCase().includes(search)
            }).map( (itme) => (
              <Products key={itme.id} {...itme} />
            ))
          }
       </article>
   </Container>
  )
}

export default Allfoods
