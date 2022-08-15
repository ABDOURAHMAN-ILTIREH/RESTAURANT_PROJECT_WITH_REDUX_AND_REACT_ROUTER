import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import '../components/style/Checkbox__modules.css'
import { useSelector } from 'react-redux'


const Checkbox = () => {
  const {total} = useSelector(state => state.cart);

  return (
  <Container>
      <section className='checkbox__wrapper'>
        <div className="shipping__adress">
              <h2>shipping adress</h2>
              <form>
                <div className="input__row">
                  <label>enter your name</label>
                  <input type="text"/>
                </div>
                <div className="input__row">
                  <label>enter your email</label>
                  <input type="text" />
                </div>
                <div className="input__row">
                  <label>phone number</label>
                  <input type="number" />
                </div>
                <div className="input__row">
                  <label>country</label>
                  <input type="text" />
                </div>
                <div className="input__row">
                  <label>city</label>
                  <input type="text" />
                </div>
                <div className="input__row">  
                  <label>postal code</label>
                  <input type="number" />
                </div>
              </form>
              <button type="submit">payment</button>
        </div>
        <div className="details__products">
        <div>
          <div>
            <strong>subtitle :</strong>
            <span>${total}</span>
          </div>
          <div>
            <strong>shipping:</strong>
            <span>$30</span>
          </div>
          <div>
           <h3>totals :</h3>
            <h3>${total + 30}</h3>
          </div>
          </div>
        </div>
      </section>
  </Container>
  )
}

export default Checkbox