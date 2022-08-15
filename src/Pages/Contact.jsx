import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../components/style/Contact.module.css'
import {FaUser, FaEnvelope, FaPhone, FaBook, FaLocationArrow} from 'react-icons/fa'

const Contact = () => {
  return (
       <section className={styles.section}>
    <Container className={styles.container}>
      <div className={styles.header__form}>
          <h2>send us a message </h2>
          <hr />
          <form>
            <div className={styles.input__form}>
              <div className={styles.input__row}>
                <i><FaUser /></i>
                <input type="text" placeholder='enter your name' />
              </div>
              <div className={styles.input__row}>
              <i><FaEnvelope /></i>
                <input type="text" placeholder='enter your email' />
              </div>
            </div>
            <div className={styles.input__form}>
                <div className={styles.input__row}>
                  <i><FaPhone/></i>
                  <input type="number" placeholder='enter your phone number' />
                </div>
                <div className={styles.input__row}>
                <i><FaLocationArrow /></i>
                   <input type="text" placeholder='enter your address' />
                </div>
             </div>
              <div className={styles.textarea}>
              <i><FaBook /></i>
                <textarea name="" id="" cols="30" rows="10" placeholder='write your message'></textarea>
              </div>
            <button className="button">send message</button>
          </form>
      </div>
    </Container>
       </section>
  )
}

export default Contact