import React from 'react'
import Link from 'gatsby-link'

import twitterLogo from '../assets/twitter_logo.svg'

const TeamMember = ({name, role, twitterHandle}) => (
  <div className='column' style={{
    alignSelf: 'flex-start',
  }}>
    <div style={{
      width: '215px',
      height: '215px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gridRowGap: '15px',
      gridColumnGap: '15px',
    }}>
      <div style={{backgroundColor: 'tomato', gridColumnStart: 1, gridColumnEnd: 1, gridRowStart: 1, gridRowEnd: 1}}>a</div>
      <div style={{backgroundColor: 'tomato', gridColumnStart: 2, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 1}}>a</div>
      <div style={{backgroundColor: 'tomato', gridColumnStart: 1, gridColumnEnd: 1, gridRowStart: 2, gridRowEnd: 2}}>a</div>
      <div style={{backgroundColor: 'tomato', gridColumnStart: 2, gridColumnEnd: 2, gridRowStart: 2, gridRowEnd: 2}}>a</div>
    </div>
    <div style={{
      marginTop: '1em',
    }}>
      <strong>{name}</strong>
      <p style={{
        marginBottom: '0.6em',
      }}>{role}</p>
      <img style={{
        width: '14px',
        height: '14px',
        margin: 0,
      }} src={twitterLogo}/>
    </div>
  </div>
)

export default TeamMember