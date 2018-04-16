import React from 'react'
import Link from 'gatsby-link'
import styles from './Header.module.css'
import logo from '../assets/logo.svg'

const Header = () => (
  <div
    style={{
      marginTop: '2em',
      marginBottom: '2rem',
    }}
  >
    <div
      className='columns'
      style={{
        margin: '0 auto',
        maxWidth: 1200,
        padding: '0 25px',
      }}
    >
      <div className={`${styles.logoContainer} column is-half`}>
        <Link to='/'><img src={logo}/></Link>
      </div>

      <nav className='column'>
        <ul className='columns'>
          <li className={`column ${styles.li}`}><Link to='/platform'>Platform</Link></li>
          <li className={`column ${styles.li}`}><Link to='/about'>About</Link></li>
          <li className={`column ${styles.li}`}><Link to='/events'>Events</Link></li>
          <li className={`column ${styles.li}`}><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
