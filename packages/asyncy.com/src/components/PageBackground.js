import React from 'react'

const PageBackground = ({ leftImage, rightImage, leftX, leftY, rightX, rightY, scale }) => (
  <div>
  <div css={{
    backgroundImage: `url(${leftImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: `calc(1200px * ${scale || 1})`,
    height: `calc(700px * ${scale || 1})`,
    position: 'absolute',
    zIndex: '-1',
    left: leftX || '-700px',
    top: leftY || '-64px',
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
    top: rightY || '-170px',
    right: rightX || '0px',
    '@media (max-width: 768px)': {
      width: '250px',
    }
  }}>
    <div css={{
      backgroundImage: `url(${rightImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      width: `calc(1200px * ${scale || 1})`,
      height: `calc(700px * ${scale || 1})`,
    }}/>
  </div>
  </div>
)

export default PageBackground