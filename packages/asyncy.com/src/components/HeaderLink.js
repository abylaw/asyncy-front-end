import React from 'react'
import Link from './Link'

const HeaderLink = (props) => (
  <span css={{
    position: 'relative',
    ':before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px',
      bottom: '-9px',
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
    <Link {...props}>
      {props.children}
    </Link>
  </span>
)

export default HeaderLink