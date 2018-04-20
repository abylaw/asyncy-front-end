import React from 'react'
import Link from 'gatsby-link'

const Hero = ({ title, subtitle }) => (
  <div
    style={{
      marginTop: '45px',
      marginBottom: '70px',
    }}
  >
    <div
      style={{
        width: '100%',
        textAlign: 'center',
      }}
    >
      <h1>
        {title}
      </h1>
      <div style={{
        boxSizing: 'border-box',
        height: '2px',
        width: '50px',
        border: '2px solid #8FC2FA',
        margin: '25px auto 20px auto',
      }} />
      <div style={{
        maxWidth: '650px',
        fontSize: '1em',
        lineHeight: '1.9em',
        margin: '0 auto',
      }}>
        <subtitle>{subtitle}</subtitle>
      </div>
    </div>
  </div>
)

export default Hero
