import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/logo.svg'
import HeaderLink from './HeaderLink'

const openMenu = () => {
  const e = document.getElementById('mobile-menu');

  e.style.display = 'block'
}

const closeMenu = () => {
  const e = document.getElementById('mobile-menu');

  e.style.display = 'none'
}

const headerLinks = [
  { text: 'Platform', to: '/platform' },
  { text: 'About', to: '/about' },
  { text: 'Events', to: '/events' },
  { text: 'Contact', to: '/contact' },
]

const mobileHeaderLinks = headerLinks.slice()
mobileHeaderLinks.unshift({ text: 'Home', to: '/'})

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
              <a onClick={openMenu}>☰</a>
            </div>
          </div>
        </div>
      </div>

      <div id='mobile-menu' style={{
        display: 'none',
      }} css={{
        position: 'fixed',
        background: 'black',
        textAlign: 'center',
        width: '100vw',
        height: '100vh',
        left: 0,
        top: 0,
        padding: '23px',
        zIndex: '3000',
      }}>
        <div style={{
          width: '100%',
          textAlign: 'right',
          fontSize: '2em',
          paddingBottom: '25px',
        }}>
          <a onClick={closeMenu}>✕</a>
        </div>
        <nav>
          <ul className='columns' style={{
            textAlign: 'center',
            fontSize: '1.2em',
            paddingLeft: '0',
          }}>
            {
              mobileHeaderLinks.map((link, key) => 
                <li className='column' key={key} style={{
                  padding: '22px',
                }}>
                  <HeaderLink to={link.to} onClick={closeMenu}>{link.text}</HeaderLink>
                </li>
              )
            }
          </ul>
        </nav>
      </div>

      <div className='column is-hidden-mobile' style={{
        padding: 0,
      }}>
        <nav>
          <ul className='columns' style={{
            textAlign: 'center',
            fontSize: '1.06em',
            paddingLeft: '0',
          }}>
            {
              headerLinks.map((link, key) => 
                <li className='column' key={key}>
                    <HeaderLink to={link.to}>{link.text}</HeaderLink>
                </li>
              )
            }
          </ul>
        </nav>
      </div>
    </div>
  </div>
)

export default Header
