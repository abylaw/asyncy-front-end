import React from 'react'
import Link from 'gatsby-link'

const HeaderLink = (props) => (
  <span css={{
    position: 'relative',
    ':before': {
      content: '""',
      position: 'absolute',
      width: 'calc(100% - 24px)',
      height: '2px',
      bottom: '-9px',
      left: '12px',
      backgroundColor: '#888',
      visibility: 'hidden',
      transform: 'scaleX(0)',
      transition: 'all 0.15s ease-out 0s',
    },
    ':hover:before': {
      visibility: 'visible',
      transform: 'scaleX(1)',
    },
    ':hover a': {
      color: '#D1D1D1',
      transition: 'all 0.15s ease-in-out 0s',
    },
  }}>
    <Link {...props} style={{
      padding: '12px',
    }}>
      {props.children}
    </Link>
  </span>
)

export default HeaderLink