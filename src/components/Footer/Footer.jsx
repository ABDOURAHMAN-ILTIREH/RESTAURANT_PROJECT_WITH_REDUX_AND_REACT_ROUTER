import React from 'react'
import { Container} from 'react-bootstrap'
import logo from '../../assets/images/res-logo.png'
import './Footer_module.css'
import {MdSend} from 'react-icons/md'
import {FaFacebook,FaInstagram,FaYoutube,FaLinkedin} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='footer'>
         <Container>
             <div className="Row">
                <div className="Col">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h5>Tasty Treat</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.saepe.</p>
                    </div>
                </div>
                <div className="col">
                   <h5>delivery time</h5>
                   <div className="content__show">
                       <p>sunday - thursday <br /> <span>10:00pm - 11:00pm</span></p>
                       <p>friday - saturday <br /> <span>off day</span></p>
                   </div>
                </div>
                <div className="col">
                    <h5>contact</h5>
                    <div className="container__show">
                        <p> <strong>location</strong>zindbaza,sydnit 3100, djibouti</p>
                            <p><strong>phone</strong>: 0171258745872</p>
                            <p> <strong>emails</strong>:example@gamil.com</p>  
                    </div>
                </div>
                <div className="col">
                     <h5>newsletter</h5>
                     <p>subscripte our newsletter</p>
                     <div className="input__news">
                     <input type="text" placeholder='enter your email'/>
                     <button>
                        <MdSend className='Mdsend' />
                     </button>
                     </div>
                </div>
             </div>
             <div className="smooth__col">
                <p>copyright - 2022: website made by abdourahman all right reserved</p>
                <div className="follow__col">
                    <span className=''>follow:</span>
                    <FaFacebook className='icons' />
                    <FaInstagram  className='icons'  />
                    <FaYoutube  className='icons' />
                    <FaLinkedin  className='icons'   />
                </div>
             </div>
         </Container>
    </footer>
  )
}

export default Footer