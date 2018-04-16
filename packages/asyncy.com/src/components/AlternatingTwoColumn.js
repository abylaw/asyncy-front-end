import React from 'react'
import TwoColumn from "./TwoColumn.js";

const AlternatingTwoColumn = ({ textData }) => (
  <div>
    {
      textData.map((data, index) => {
        if (index % 2 === 0) {
         return <TwoColumn key={index}>
          <div data-slot='left' style={{
            backgroundColor: '#252525',
            borderRadius: '7px',
            padding: '25px',
            height: '100%',
          }}>
            <code>
              events 'new-user-signup' as data
              twitter tweet 'Welcome @'
              slack post 'New customer: . Yippie!'
            </code>
          </div>
          <div data-slot='right' style={{
            maxWidth: '490px',
            marginLeft: 'auto',
          }}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <button className='secondary'>{data.linkText}</button>
          </div>
        </TwoColumn>
        } else {
          return <TwoColumn key={index}>
          <div data-slot='left' style={{
            maxWidth: '490px',
            marginLeft: 'auto',
          }}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <button className='secondary'>{data.linkText}</button>
          </div>
          <div data-slot='right' style={{
              backgroundColor: '#252525',
              borderRadius: '7px',
              padding: '25px',
              height: '100%',
            }}>
          </div>
        </TwoColumn>
        }
      })
    }
  </div>
)

export default AlternatingTwoColumn
