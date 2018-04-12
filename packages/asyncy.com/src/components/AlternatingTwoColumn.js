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
            padding: '40px 0px 40px 80px',
          }}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <button className='secondary'>{data.linkText}</button>
          </div>
        </TwoColumn>
        } else {
          return <TwoColumn key={index}>
          <div data-slot='left' style={{
            padding: '40px 0px 40px 80px',
          }}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <button className='secondary'>{data.linkText}</button>
          </div>
          <div data-slot='right' style={{
              width: '200px',
              height: '200px',
              margin: 'auto auto',
              backgroundColor: '#252525',
            }}>
          </div>
        </TwoColumn>
        }
      })
    }
  </div>
)

export default AlternatingTwoColumn
