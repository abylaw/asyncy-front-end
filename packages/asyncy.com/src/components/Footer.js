import React from 'react'
import Link from 'gatsby-link'

import styles from './Footer.module.css'
import slack from '../assets/slack_logo.svg'
import github from '../assets/github_logo.svg'
import twitter from '../assets/twitter_logo.svg'

const Footer = () => (
  <div
    style={{
      fontSize: '0.9em',
      marginBottom: '45px',
    }}
  >
    <div className='columns' style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 25px',
    }}>
      <nav className='column'>
        <div className={styles.menuHeader}>Product</div>
        <ul className={styles.ul}>
          <li className={styles.li}><Link to='/'>Overview</Link></li>
          <li className={styles.li}><Link to='/'>Storyscript</Link></li>
          <li className={styles.li}><Link to='/'>FAQ</Link></li>
          <li className={styles.li}><Link to='/'>Give Feedback</Link></li>
        </ul>
      </nav>
      <nav className='column'>
        <div className={styles.menuHeader}>Support</div>
        <ul className={styles.ul}>
          <li className={styles.li}><Link to='/'>Slack</Link></li>
          <li className={styles.li}><Link to='/'>Github Issues</Link></li>
        </ul>
      </nav>
      <nav className='column'>
        <div className={styles.menuHeader}>Resources</div>
        <ul className={styles.ul}>
          <li className={styles.li}><Link to='/'>Events</Link></li>
          <li className={styles.li}><Link to='/'>Press</Link></li>
        </ul>
      </nav>
      <nav className='column'>
        <div className={styles.menuHeader}>Company</div>
        <ul className={styles.ul}>
          <li className={styles.li}><Link to='/'>About</Link></li>
          <li className={styles.li}><Link to='/'>Jobs</Link></li>
          <li className={styles.li}><Link to='/'>Contact</Link></li>
          <li className={styles.li}><Link to='/'>Partners</Link></li>
        </ul>
      </nav>
      <div className='column'>
        <img src={slack} style={{
          width: '30px',
          marginLeft: '20px',
        }}/>
        <img src={github} style={{
          width: '30px',
          marginLeft: '25px',
        }}/>
        <img src={twitter} style={{
          width: '30px',
          marginLeft: '25px',
        }}/>
      </div>
    </div>
  </div>
)

export default Footer
