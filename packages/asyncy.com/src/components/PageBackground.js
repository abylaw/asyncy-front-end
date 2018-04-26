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
    width: '450px',
    height: '700px',
    overflow: 'hidden',
    top: '-170px',
    right: '0px',
    '@media (max-width: 768px)': {
      width: '250px',
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