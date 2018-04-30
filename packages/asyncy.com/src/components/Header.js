import React from 'react'
import Link from 'gatsby-link'
import styles from './Header.module.scss'
import logo from '../assets/images/logo.svg'

const toggleMenu = () => {
  const e = document.getElementById('toggle-menu');

  console.log(e);
  e.checked = !e.checked;
}

const Header = () => (
  <div
    style={{
      marginTop: '40px',
      marginBottom: '25px',
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
      <div className='column is-half' style={{
        padding: 0,
      }}>
        <div className='columns is-mobile'>
          <div className='column'>
            <Link to='/'><img src={logo} style={{
              margin: 0,
            }}/></Link>
          </div>
          <div className='column is-narrow is-hidden-tablet'>
            <div style={{
              fontSize: '32px',
              lineHeight: '20px',
              verticalAlign: 'top',
            }}>
              <a onClick={toggleMenu}>☰</a>
            </div>
          </div>
        </div>
      </div>

      <div className={`column ${styles.checkbox}`} style={{
        padding: 0,
      }}>
        <input type='checkbox' id='toggle-menu' style={{ display: 'none' }}/>
        <nav className={styles.navbar}>
          <ul className='columns' style={{
            textAlign: 'center',
            fontSize: '1.06em'
          }}>
            <li className='column'><Link to='/platform'>Platform</Link></li>
            <li className='column'><Link to='/about'>About</Link></li>
            <li className='column'><Link to='/events'>Events</Link></li>
            <li className='column'><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
)

export default Header
