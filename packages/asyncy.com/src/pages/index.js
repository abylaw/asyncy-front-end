import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'
import TwoColumn from '../components/TwoColumn'
import AlternatingTwoColumn from '../components/AlternatingTwoColumn'

import googleLogo from '../assets/google_logo.svg'
import microsoftLogo from '../assets/microsoft_logo.svg'
import amazonLogo from '../assets/amazon_logo.svg'
import digitalOceanLogo from '../assets/digital_ocean_logo.svg'

const IndexPage = ({ data }) => (
  <div>
    <div
      style={{
        marginBottom: '120px',
      }}
    >
      <div
        style={{
          width: '100%',
          textAlign: 'center',
        }}
      >
        <h1>
          Write stories, then code.
        </h1>
        <subtitle>
          The choreographed microservice platform for rapid application development.
        </subtitle>
        <div style={{
          margin: '40px 0 0 0',
        }}>
          <input type='text' placeholder='Email address' style={{
            marginRight: '10px',
            width: '420px',
          }}/>
          <button className='primary'>Get notified</button>
        </div>
      </div>
    </div>

    <section className='section'>
      <AlternatingTwoColumn textData={data.allIndexYaml.edges[0].node.sections} />
    </section>

    <section className='section'>
      <div className='columns'>
        {
          data.allIndexYaml.edges[0].node.usecases.map((usecase, index) => {
            return <div className='column' key={index}>
              <h3>{usecase.title}</h3>
              <p style={{
                width: '320px',
                fontSize: '1em',
                lineHeight: '1.95em',
              }}>
                {usecase.description}</p>
              
            </div>;
          })
        }
      </div>
    </section>

    <div style={{
      textAlign: 'center',
      backgroundColor: '#515CF9',
      width: '100vw',
      marginLeft: '-25px',
      paddingBottom: '45px',
      paddingTop: '45px',
    }}>
      <h2>Learn with the community</h2>
      <div style={{
        width: '800px',
        margin: '40px auto',

      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
          gridRowGap: '15px',
          gridColumnGap: '33px',
          width: '100%',
          height: '400px',
        }}>
          <div style={{
            background: 'white',
            borderRadius: '7px',
            boxShadow: '0 1px 9px 0 #333CBE',
            gridColumnStart: 1,
            gridColumnEnd: 3,
            gridRowStart: 1,
            gridRowEnd: 4,
          }}>
            hello
          </div>
          <div style={{
            background: 'white',
            borderRadius: '7px',
            boxShadow: '0 1px 9px 0 #333CBE',
            gridColumnStart: 3,
            gridColumnEnd: 3,
            gridRowStart: 1,
            gridRowEnd: 3,
          }}>
            hello
          </div>
          <div style={{
            background: 'white',
            borderRadius: '7px',
            boxShadow: '0 1px 9px 0 #333CBE',
            gridColumnStart: 1,
            gridColumnEnd: 3,
            gridRowStart: 4,
            gridRowEnd: 6,
          }}>
            hello
          </div>
          <div style={{
            background: 'white',
            borderRadius: '7px',
            boxShadow: '0 1px 9px 0 #333CBE',
            gridColumnStart: 3,
            gridColumnEnd: 3,
            gridRowStart: 3,
            gridRowEnd: 6,
          }}>
            hello
          </div>
        </div>
      </div>
    </div>

    <section style={{
      marginTop: 0,
      width: '100vw',
      marginLeft: '-25px',
      paddingBottom: '100px',
      paddingTop: '45px',
      textAlign: 'center',
      backgroundColor: '#2D2D2D',
    }}>
      <h2>Open Source</h2>
      <p>Run Asyncy in any environment. Locally, or on our hosted cloud.</p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '80%',
        margin: '35px auto 0 auto',
      }}>
        <img src={digitalOceanLogo}/>
        <img src={googleLogo}/>
        <img src={amazonLogo}/>
        <img src={microsoftLogo}/>
      </div>
    </section>

    <div style={{
      margin: '15px auto',
      transform: 'translate(0, -50%)',
      textAlign: 'center',
      width: '60%',
      backgroundColor: '#00C584',
      padding: '40px',
      borderRadius: '4px',
      boxShadow: '0 1px 13px 0 rgba(0,0,0,0.5)',

    }}>
      <h4>Sign up to get updates</h4>
      <input type="text" placeholder="Email address" style={{
        backgroundColor: 'white',
        color: 'grey',
        marginRight: '10px',
        width: '420px',
        height: '48px',
        boxShadow: '0px 1px 3px #4AB390',
      }}/>
      <button style={{
         fontSize: '0.8em',
         backgroundColor: '#008257',
         color: 'white',
         border: 'none',
         bordeRadius: '6px',
         padding: '12px 28px',
      }}>Get notified</button>
    </div>
  </div>
)

export default IndexPage

export const indexDataQuery = graphql`
  query IndexDataQuery {
    allIndexYaml {
      edges {
        node {
          sections {
            title
            description
            link
            linkText
          }
          usecases {
            title
            description
          }
        }
      }
    }
  }
`