import React from 'react'

const PageBackground = ({ leftImage, rightImage }) => (
  <div>
  <div css={{
    backgroundImage: `url(${leftImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '1200px',
    height: '700px',
    position: 'absolute',
    zIndex: '-1',
    left: '-750px',
    top: '-64px',
    '@media (max-width: 768px)': {
      left: '-950px',
    }
  }}/>
  <div css={{
    position: 'absolute',
    zIndex: '-1',
    width: '550px',
    height: '700px',
    overflow: 'hidden',
    right: '-100px',
    top: '-170px',
    '@media (max-width: 768px)': {
      right: '-300px',
    }
  }}>
    <div css={{
      backgroundImage: `url(${rightImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      width: '1200px',
      height: '700px',
    }}/>
  </div>
  </div>
)

export default PageBackground