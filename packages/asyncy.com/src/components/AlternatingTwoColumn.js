import React from 'react'
import Link from '../components/Link'

const imageStyling = {
  marginBottom: 0,
}

const imageContainerStyling = {
  display: 'flex',
  alignItems: 'center',
}

const AlternatingTwoColumn = ({ reversed, textData }) => (
  <div>
    {
    textData.map((data, index) => {
      return <div key={index} className='columns' style={{
        margin: '65px 0',
      }}>
        { index % 2 === (reversed ? 1 : 0) &&
          <div className='column is-narrow' style={imageContainerStyling}>
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
          { data.items &&
            <ul style={{
              minWidth: '380px',
              marginLeft: 0,
              listStyle: 'none'
            }}>
              {
                data.items.map((item) => (
                  <li css={{
                    height: '4em',
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '1px solid #333',
                    marginBottom: 0,
                    ':last-child': {
                      borderBottom: 'none',
                    }
                  }}>
                    <img src={item.icon} style={{
                      marginRight: '0.4em',
                    }}/> {item.text}
                  </li>
                ))
              }
            </ul>
          }
          { data.linkText &&
            <Link to={data.link}>
              <button className='secondary'>{data.linkText}</button>
            </Link>
          }
        </div>
        {index % 2 === (reversed ? 0 : 1) &&
          <div className='column is-narrow' style={imageContainerStyling}>
            <img style={imageStyling} src={data.image}/>
          </div>
        }
      </div>
    })
    }
  </div>
)

export default AlternatingTwoColumn
