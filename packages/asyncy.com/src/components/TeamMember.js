import React from 'react'
import Link from 'gatsby-link'

import twitterLogo from '../assets/twitter_logo.svg'

const TeamMember = ({name, role, twitterHandle, images}) => (
  <div className='column' css={{
    alignSelf: 'flex-start',
    '@media (max-width: 768px)': {
      textAlign: 'center'
    }
  }}>
    <div style={{
      width: '215px',
      height: '215px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gridRowGap: '15px',
      gridColumnGap: '15px',
      margin: '0 auto',
    }}>
      <div style={{marginBottom: 0, gridColumnStart: 1, gridColumnEnd: 1, gridRowStart: 1, gridRowEnd: 1}}>
        <img src={images[0]} style={{ marginBottom: 0 }}/>
      </div>
      <div style={{marginBottom: 0, gridColumnStart: 2, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 1}}>
        <img src={images[1]} style={{ marginBottom: 0 }}/>
      </div>
      <div style={{marginBottom: 0, gridColumnStart: 1, gridColumnEnd: 1, gridRowStart: 2, gridRowEnd: 2}}>
        <img src={images[2]} style={{ marginBottom: 0 }}/>
      </div>
      <div style={{marginBottom: 0, gridColumnStart: 2, gridColumnEnd: 2, gridRowStart: 2, gridRowEnd: 2}}>
        <img src={images[3]} style={{ marginBottom: 0 }}/>
      </div>
    </div>
    <div style={{
      marginTop: '1em',
    }}>
      <strong>{name}</strong>
      <p style={{
        marginBottom: '0.6em',
      }}>{role}</p>
      <a href={`https://twitter.com/${twitterHandle}`}>
        <img style={{
          width: '14px',
          height: '14px',
          margin: 0,
        }} src={twitterLogo}/>
      </a>
    </div>
  </div>
)

export default TeamMember