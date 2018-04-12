import React from 'react'
import { Slot } from 'react-slotted'
import styles from "./TwoColumn.module.css";

const TwoColumn = ({ props, children }) => (
  <div className='parent' style={{
    display: 'flex',
    flexFlow: 'row-wrap',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '50px',
  }}>
    <div className={styles.children}>
      <Slot slot='left'>{children}</Slot>
    </div>
    <div className={styles.children}>
      <Slot slot='right'>{children}</Slot>
    </div>
  </div>
)

export default TwoColumn
