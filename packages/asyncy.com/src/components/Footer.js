import React from 'react'
import Link from 'gatsby-link'

import styles from './Footer.module.css'

const Footer = () => (
  <div
    style={{
      fontSize: '0.9em',
      marginBottom: '45px',
    }}
  >
    <div
      className='container'
      style={{
        display: 'flex',
        margin: '0 auto',
        flexFlow: 'row wrap',
        maxWidth: 1200,
        padding: '0 100px',
        justifyContent: 'space-between',
      }}
    >
      <nav className={styles.nav}>
        <div className={styles.menuHeader}>Product</div>
        <ul style={{
          listStyle: 'none',
          marginLeft: 0,
        }}>
          <li className={styles.li}><Link to='/'>Overview</Link></li>
          <li className={styles.li}><Link to='/'>Storyscript</Link></li>
          <li className={styles.li}><Link to='/'>FAQ</Link></li>
          <li className={styles.li}><Link to='/'>Give Feedback</Link></li>
        </ul>
      </nav>
      <nav className={styles.nav}>
        <div className={styles.menuHeader}>Support</div>
        <ul style={{
          listStyle: 'none',
          marginLeft: 0,
        }}>
          <li className={styles.li}><Link to='/'>Slack</Link></li>
          <li className={styles.li}><Link to='/'>Github Issues</Link></li>
        </ul>
      </nav>
      <nav className={styles.nav}>
        <div className={styles.menuHeader}>Resources</div>
        <ul style={{
          listStyle: 'none',
          marginLeft: 0,
        }}>
          <li className={styles.li}><Link to='/'>Events</Link></li>
          <li className={styles.li}><Link to='/'>Press</Link></li>
        </ul>
      </nav>
      <nav className={styles.nav}>
        <div className={styles.menuHeader}>Company</div>
        <ul style={{
          listStyle: 'none',
          marginLeft: 0,
        }}>
          <li className={styles.li}><Link to='/'>About</Link></li>
          <li className={styles.li}><Link to='/'>Jobs</Link></li>
          <li className={styles.li}><Link to='/'>Contact</Link></li>
          <li className={styles.li}><Link to='/'>Partners</Link></li>
        </ul>
      </nav>
      <div style={{
        flexBasis: '33%',
      }}>
      </div>
    </div>
  </div>
)

export default Footer
