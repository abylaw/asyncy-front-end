import React from 'react'
import Link from '../components/Link'

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
          <li className={styles.li}><Link to='/platform'>Overview</Link></li>
          <li className={styles.li}><Link to='https://docs.asyncy.com/#storyscript'>Storyscript</Link></li>
          <li className={styles.li}><Link to='/faq'>FAQ</Link></li>
          <li className={styles.li}>
            <a onClick={() => window.typeform.feedback.open()}>Give Feedback</a>
          </li>
        </ul>
      </nav>
      <nav className='column'>
        <div className={styles.menuHeader}>Support</div>
        <ul className={styles.ul}>
          <li className={styles.li}><Link to='http://asyncy.click/slack'>Slack</Link></li>
          <li className={styles.li}><Link to='https://github.com/asyncy'>Github Issues</Link></li>
        </ul>
      </nav>
      <nav className='column'>
        <div className={styles.menuHeader}>Resources</div>
        <ul className={styles.ul}>
          <li className={styles.li}><Link to='/events'>Events</Link></li>
        </ul>
      </nav>
      <nav className='column'>
        <div className={styles.menuHeader}>Company</div>
        <ul className={styles.ul}>
          <li className={styles.li}><Link to='/about'>About</Link></li>
          <li className={styles.li}><Link to='https://angel.co/asyncy/jobs'>Jobs</Link></li>
          <li className={styles.li}><Link to='/contact'>Contact</Link></li>
          <li className={styles.li}><a onClick={() => window.typeform.partners.open()}>Partners</a></li>
        </ul>
      </nav>
      <div className='column'>
        <Link to='http://asyncy.click/slack'>
          <img src={slack} style={{
            width: '30px',
            marginLeft: '20px',
          }}/>
        </Link>
        <Link to='https://github.com/asyncy'>
          <img src={github} style={{
            width: '30px',
            marginLeft: '25px',
          }}/>
        </Link>
        <Link to='https://twitter.com/asyncy'>
          <img src={twitter} style={{
            width: '30px',
            marginLeft: '25px',
          }}/>
        </Link>
      </div>
    </div>
  </div>
)

export default Footer
