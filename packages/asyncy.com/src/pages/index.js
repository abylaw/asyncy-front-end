import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'
import TwoColumn from '../components/TwoColumn'
import AlternatingTwoColumn from '../components/AlternatingTwoColumn'

import googleLogo from '../assets/google_logo.svg'
import microsoftLogo from '../assets/microsoft_logo.svg'
import amazonLogo from '../assets/amazon_logo.svg'
import digitalOceanLogo from '../assets/digital_ocean_logo.svg'

import styles from './index.module.css'

const IndexPage = ({ data }) => (
  <div>
    <Hero></Hero>

    <section className={styles.section}>
      <AlternatingTwoColumn textData={data.allIndexYaml.edges[0].node.sections} />
    </section>

    <section className={styles.section}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        {
          data.allIndexYaml.edges[0].node.usecases.map((usecase, index) => {
            return <div key={index}>
              <h3>{usecase.title}</h3>
              <p>{usecase.description}</p>
            </div>;
          })
        }
      </div>
    </section>

    <div style={{
      textAlign: 'center',
      backgroundColor: '#515CF9',
      width: '100%',
      paddingBottom: '45px',
      paddingTop: '45px',
    }}>
      <h2>Learn with the community</h2>
      <div style={{
        width: '570px',
        margin: '0 auto',
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
      width: '100%',
      margin: 0,
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
        width: '60%',
        margin: '45px auto 0 auto',
      }}>
        <img src={digitalOceanLogo}/>
        <img src={googleLogo}/>
        <img src={amazonLogo}/>
        <img src={microsoftLogo}/>
      </div>
    </section>

    <div style={{
      margin: '0 auto',
      transform: 'translate(0, -50%)',
      textAlign: 'center',
      width: '50%',
      backgroundColor: '#00C584',
      padding: '50px',
      borderRadius: '4px',
      boxShadow: '0 1px 8px 0 rgba(0,0,0,0.5)',
    }}>
      <h3>Sign up to get updates</h3>
      <input type="text" placeholder="Email address" style={{
        backgroundColor: 'white',
        color: 'grey',
        marginRight: '10px',
      }}/>
      <button style={{
        backgroundColor: '#008257',
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