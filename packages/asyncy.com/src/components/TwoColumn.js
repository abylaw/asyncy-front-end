import React from 'react'
import { Slot } from 'react-slotted'

const TwoColumn = ({ props, children }) => (
  <div className='columns' style={{
    margin: '95px 0',
  }}>
    <div className='column'>
      <Slot slot='left'>{children}</Slot>
    </div>
    <div className='column'>
      <Slot slot='right'>{children}</Slot>
    </div>
  </div>
)

export default TwoColumn
