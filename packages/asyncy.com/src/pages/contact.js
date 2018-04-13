import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'

import styles from './contact.module.scss'

const ContactPage = ({ data }) => (
  <div>
    <Hero title='Contact Us' subtitle='Get in touch and let us know how we can help.'></Hero>

    <section className='section' style={{
      maxWidth: '900px',
    }}>
      <div className='columns'>
        <div className='column'>
          <div className={styles.box}>
            <div className={styles.heading}><h4>Sales</h4></div>
            <p>We'd love to talk about how we can work together.</p>
            <button className={`${styles.btn} secondary`}>Contact Sales</button>
          </div>
        </div>
        <div className='column'>
          <div className={styles.box}>
            <div className={styles.heading}><h4>Help & Support</h4></div>
            <p>We're here to help with any questions or concerns.</p>
           <button className={`${styles.btn} secondary`}>Contact Support</button>
          </div>
        </div>
        <div className='column'>
          <div className={styles.box}>
           <div className={styles.heading}><h4>Media & Press</h4></div>
           <p>Get asyncy news, company info, and media resources.</p>
            <button className={`${styles.btn} secondary`}>Contact Press</button>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default ContactPage
