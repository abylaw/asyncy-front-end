import React from 'react'
import Link from '../components/Link'

const AlternatingTwoColumn = ({ reversed, textData }) => (
  <div>
    {
    textData.map((data, index) => {
      return <div key={index} className='columns' style={{
        margin: '65px 0',
      }}>
        <div className='column is-narrow' css={{
          order: (index + (reversed ? 1 : 0)) % 2,
          '@media (max-width: 768px)': {
            order: 0,
          }
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}>
            <img style={{
              marginBottom: 0,
            }} src={data.image}/>
          </div>
        </div>
        <div className='column'>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '100%',
            height: '100%',
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
                  data.items.map((item, index) => (
                    <li key={index} css={{
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
        </div>
      </div>
    })
    }
  </div>
)

export default AlternatingTwoColumn
