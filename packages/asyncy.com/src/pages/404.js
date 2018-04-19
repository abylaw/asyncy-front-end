import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <section className='section' style={{
    textAlign: 'center',
  }}>
    <h1>404</h1>
    <h3>Oops. The page you were looking for doesn't exist.</h3>
    <p>You may have mistyped the address or the page may have moved</p>

    <Link to='/'><button className='secondary'>Go to homepage</button></Link>
  </section>
)

export default NotFoundPage
