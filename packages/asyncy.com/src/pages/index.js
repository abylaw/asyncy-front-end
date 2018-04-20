import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'
import AlternatingTwoColumn from '../components/AlternatingTwoColumn'
import EmailForm from '../components/EmailForm'

import appsIcon from '../assets/icon_apps.svg'
import automationIcon from '../assets/icon_automation.svg'
import integrationIcon from '../assets/icon_integration.svg'

import googleLogo from '../assets/google_logo.svg'
import microsoftLogo from '../assets/microsoft_logo.svg'
import amazonLogo from '../assets/amazon_logo.svg'
import digitalOceanLogo from '../assets/digital_ocean_logo.svg'
import placeholder from '../assets/placeholder.svg'

const data = {
  title: 'Write stores, then code.',
  subtitle: 'The choreographed microservice platform for rapid application development.',
  sections: [
    {
      title: 'Meet Storyscript',
      description: 'Inspired by the Zen of Python where functions are microservices, Storyscript is an high-level language that can be used to orchestrate microservices in an algorithmic way.',
      image: placeholder,
      link: 'https://docs.asyncy.com/#storyscript',
      linkText: 'Learn More'
    },
    {
      title: 'Microservice choreography',
      description: 'Microservice Choreography is an architecture layer above orchestration eliminating service coupling and seperates logic from code with limited to no devops. Perfect for rapid application prototyping to production.',
      image: placeholder,
      link: '/platform',
      linkText: 'Learn More'
    }
  ],
  usecases: [
    {
      title: 'Applications',
      description: 'Prototype applications 10-100x quicker on a production-grade platform powered by microservices. Perfect for backends and APIs.',
      icon: appsIcon,
    },
    {
      title: 'Automation',
      description: 'Transparent, long-running logic for customer retention and marketing automation. Perfect for social media and cron jobs.',
      icon: automationIcon,
    },
    {
      title: 'Integration',
      description: 'Seamlessly connect services and applications with reusable containers. Perfect for devops, webhooks and bots.',
      icon: integrationIcon,
    },
  ],
  community: {
    title: 'Learn with the community',
  },
  opensource: {
    title: 'Open Source',
    description: 'Run Asyncy in any environment. Locally, or on our hosted cloud.',
    logos: [digitalOceanLogo, googleLogo, amazonLogo, microsoftLogo],
  }
}

const IndexPage = () => (
  <div>
    <div
      style={{
        marginTop: '65px',
        marginBottom: '100px',
      }}
    >
      <div
        style={{
          width: '100%',
          textAlign: 'center',
        }}
      >
        <h1>{data.title}</h1>
        <subtitle>{data.subtitle}</subtitle>
        <div style={{
          maxWidth: '500px',
          margin: '40px auto 0 auto',
        }}>
          <EmailForm/>
        </div>
      </div>
    </div>

    <section className='section'>
      <AlternatingTwoColumn textData={data.sections} />
    </section>

    <section className='section'>
      <div className='columns'>
        {
          data.usecases.map((usecase, index) => {
            return <div className='column' key={index} css={{
              '@media (max-width: 768px)': {
                textAlign: 'center',
                marginBottom: '1em',
              },
            }}>
              <img src={usecase.icon} style={{
                marginBottom: '0.8em',
              }}/>
              <h3>{usecase.title}</h3>
              <p css={{
                maxWidth: '320px',
                fontSize: '1em',
                lineHeight: '1.95em',
                '@media (max-width: 768px) and (min-width: 400px)': {
                  maxWidth: '500px',
                  margin: '0 auto',
                }
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
      <h2>{data.community.title}</h2>
      <div className='columns' style={{
        maxWidth: '800px',
        padding: '0 25px',
        margin: '40px auto',
      }}>
        <div css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
          gridRowGap: '15px',
          gridColumnGap: '33px',
          width: '100%',
          height: '400px',
          '@media(max-width: 600px)': {
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr 1fr 1fr 1fr',
            height: 'auto',
          }
        }}>
          <div css={{
            background: 'white',
            borderRadius: '7px',
            boxShadow: '0 1px 9px 0 #333CBE',
            gridArea: '1 / 1 / 4 / 3',
            '@media(max-width: 600px)': {
              gridArea: '1 / 1 / 2 / 2',
            }
          }}>
            hello
          </div>
          <div css={{
            background: 'white',
            borderRadius: '7px',
            boxShadow: '0 1px 9px 0 #333CBE',
            gridArea: '3 / 3 / 1 / 3',
            '@media(max-width: 600px)': {
              gridArea: '2 / 1 / 3 / 2',
            }
          }}>
            hello
          </div>
          <div css={{
            background: 'white',
            borderRadius: '7px',
            boxShadow: '0 1px 9px 0 #333CBE',
            gridArea: '4 / 1 / 6 / 3',
            '@media(max-width: 600px)': {
              gridArea: '3 / 1 / 4 / 2',
            }
          }}>
            hello
          </div>
          <div css={{
            background: 'white',
            borderRadius: '7px',
            boxShadow: '0 1px 9px 0 #333CBE',
            gridArea: '3 / 3 / 6 / 3',
            '@media(max-width: 600px)': {
              gridArea: '4 / 1 / 5 / 2',
            }
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
      padding: '45px 25px 100px 25px',
      textAlign: 'center',
      backgroundColor: '#2D2D2D',
    }}>
      <h2>{data.opensource.title}</h2>
      <p>{data.opensource.description}</p>

      <div className='columns' style={{
        maxWidth: '1000px',
        margin: '0 auto 35px auto',
      }}>
        {
          data.opensource.logos.map((logo, index) => (
            <div className='column' key={index} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img src={logo} style={{
                marginBottom: 0,
              }}/>
            </div>
          ))
        }
      </div>
    </section>

    <div style={{
      margin: '15px auto',
      transform: 'translate(0, -50%)',
      textAlign: 'center',
      maxWidth: '800px',
      backgroundColor: '#00C584',
      padding: '40px 15px 10px 15px',
      borderRadius: '4px',
      boxShadow: '0 1px 13px 0 rgba(0,0,0,0.5)',

    }}>
      <h4>Sign up to get updates</h4>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '10px 0'
      }}>
        <EmailForm inputStyle={{
          backgroundColor: 'white',
          color: 'grey',
          boxShadow: '0px 1px 3px #4AB390',
        }} btnStyle={{
          backgroundColor: '#008257',
          color: 'white',
        }}/>
      </div>
    </div>
  </div>
)

export default IndexPage
