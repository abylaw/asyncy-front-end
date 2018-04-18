import React from 'react'
import Link from '../components/Link'

const imageStyling = {
  marginBottom: 0,
}

const AlternatingTwoColumn = ({ start, textData }) => (
  <div>
    {
    textData.map((data, index) => {
      return <div key={index} className='columns' style={{
        margin: '65px 0',
      }}>
        { index % 2 === 0 &&
          <div className='column is-narrow'>
            <img style={imageStyling} src={data.image}/>
          </div>
        }
        <div className='column' style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          { data.linkText &&
            <Link to={data.link}>
              <button className='secondary'>{data.linkText}</button>
            </Link>
          }
        </div>
        {index % 2 === 1 &&
          <div className='column is-narrow'>
            <img style={imageStyling} src={data.image}/>
          </div>
        }
      </div>
    })
    }
  </div>
)

export default AlternatingTwoColumn
