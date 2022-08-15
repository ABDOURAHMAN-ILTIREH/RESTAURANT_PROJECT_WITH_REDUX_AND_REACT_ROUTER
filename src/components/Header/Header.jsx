import React,{useRef,useEffect} from 'react'
import './Header_Module.css'
import { Container } from 'react-bootstrap'
import logo from '../../assets/images/res-logo.png'
import { NavLink, Link } from 'react-router-dom'
import {FaShoppingBag, FaUser} from 'react-icons/fa'
import {MdMenu} from 'react-icons/md'
import { useSelector } from 'react-redux'

const Header = () => {

  const {amount} = useSelector(state =>state.cart)

   const menuRef = useRef()
   const headerRef = useRef(null)

   const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu') 
    const nav__links = [
        {
            dispalay: 'Home',
            path:'/Home'
        },
        {
            dispalay: 'Foods',
            path:'/Foods'
        },
        {
            dispalay: 'Cart',
            path:'/Cart'
        },
        {
            dispalay: 'Contact',
            path:'/Contact'
        }
    ]

   useEffect( ()=>{
    window.addEventListener('scroll', ()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add('header__sherck');
        }
        else{
            headerRef.current.classList.remove('header__sherck'); 
        }
    })

    // return ()=> window.removeEventListener('scroll');

    },[])




  return (
      <header className='header' ref={headerRef} >
            <Container>
            <div className="nav_wrapper">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h5>Tasty Treat</h5>
                </div>
                        {/* {===== menu =====} */}
                <div className="Navigation" ref={menuRef}>
                    <div className="menu">
                        {
                        nav__links.map((itme, index) =>(
                        <NavLink to={itme.path} key={index} 
                        className={(navClass)=>
                        navClass.isActive ? "active__menu" : ""
                        }
                        onClick={toggleMenu}
                        >
                            {itme.dispalay}
                        </NavLink>
                        ))
                        }
                    </div>
                </div>
                    <div className="nav__right">
                    <span className="cart__icons">
                       <Link to={'/Cart'}><FaShoppingBag className="img"/></Link>
                        <span className="cart__badge">{amount}</span>
                    </span>
                    <span className="user">
                      <Link to={'/Register'}><FaUser  className="img" /></Link>
                    </span>
                    <span className="mobile__menu">
                        <MdMenu  className="img" onClick={toggleMenu}/>
                    </span>
                    </div>
            </div>
       </Container>
    </header>
  )
}

export default Header