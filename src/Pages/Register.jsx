import React,{useRef} from 'react'
import {MdEmail, MdLock,MdClose} from 'react-icons/md'
import {FaUser} from 'react-icons/fa'
import '../components/style/Register__modules.css'
import { Container } from 'react-bootstrap/esm'
import { Link } from 'react-router-dom'

const Register = () => {

  const userLogin = useRef(null)
  const signup = ()=> userLogin.current.classList.remove('active');
  const lognup = ()=> userLogin.current.classList.add('active');


  return (
    <Container>
        <div className="conatiner">
          <div className="forms">
            <div className="wrapper" ref={userLogin}>
                <div className="form login">
                  <div className="title">
                    <span>login</span>
                    <Link to={'/Home'} className='closer__page' >< MdClose /></Link>
                  </div>
                  <form>
                    <div className="input__field">
                      <input type="text" placeholder='enter your name' />
                      <i><MdEmail /></i>
                    </div>
                    <div className="input__field">
                      <input type="password" placeholder="Enter your password"/>
                      <i><MdLock /></i>
                    </div>

                    <div className="checkbox">
                      <div className="checkbox__content">
                        <input type="checkbox" id='checkbox'/>
                        <label htmlFor="checkbox">Remember me</label>
                      </div>
                      <Link to={'/Home'}>forget password ?</Link>
                    </div>

                    <button type='button'>Login Now</button>
                  </form>
                  <div className="login-signup">
                    <span className="text">
                      Not a member?
                      <button className='text signup__text'
                       onClick={lognup}
                      > signup now</button>
                    </span>
                  </div>
                </div>
                <div className="form signup">
                    <div className="title">
                      <span>Registration</span>
                      <Link to={'/Home'} className='closer__page' >< MdClose className='closer__page' /></Link>
                    </div>
                  <form>
                    <div className="input__field">
                      <input type="text" placeholder='enter your name' />
                      <i><FaUser /></i>
                    </div>
                    <div className="input__field">
                      <input type="text" placeholder='enter your email' />
                      <i><MdEmail /></i>
                    </div>
                    <div className="input__field">
                      <input type="password" placeholder="Enter your password"/>
                      <i><MdLock /></i>
                    </div>
                    <div className="input__field">
                      <input type="password" placeholder="confirme your password"/>
                      <i><MdLock /></i>
                    </div>
                    
                    <button type='button'>sigin Now</button>
                  </form>
                  <div className="login-signup">
                    <span className="text">
                      Have a an account?
                      <button className='text signup__text'
                      onClick={signup}
                      > Loginup now</button>
                    </span>
                  </div>
                </div>
                </div>
          </div>
        </div>
    </Container>
  )
}

export default Register