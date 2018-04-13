import React from 'react'
import Link from 'gatsby-link'

const Hero = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '120px',
      padding: '0 25px',
    }}
  >
    <div
      style={{
        width: '100%',
        textAlign: 'center',
      }}
    >
      <h1>
        Write stories, then code.
      </h1>
      <subtitle>
        The choreographed microservice platform for rapid application development.
      </subtitle>
      <div style={{
        margin: '40px 0 0 0',
      }}>
        <input type='text' placeholder='Email address' style={{
          marginRight: '10px',
          width: '380px',
        }}/>
        <button className='primary'>Get notified</button>
      </div>
    </div>
  </div>
)

export default Hero
