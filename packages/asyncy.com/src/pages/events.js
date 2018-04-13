import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'

import calendar from '../assets/icon_calendar.svg'
import pin from '../assets/icon_pin.svg'


const EventPage = ({ data }) => (
  <div>
    <Hero title='Upcoming Events' subtitle='Connect with the Asyncy community at conferences, meetups, and hackathons around the world.'></Hero>

    <section className='section' style={{
      maxWidth: '1000px',
    }}>
      <div className='columns'>
        <div className='columns column is-three-quarters'>
          <div className='column is-narrow'>
            <div style={{
              height: '145px',
              width: '145px',
              borderRadius: '4px',
              backgroundColor: '#222222',
            }}/>
          </div>
          <div className='column'>
            <h4>Asyncy Microhack</h4>
            <subtitle style={{
              fontSize: '0.8em',
            }}>
              <span style={{
                marginRight: '1em',
              }}>
                <img src={calendar} style={{marginBottom: 0, marginRight: '0.7em'}}/>March 1 2018
              </span>
              <span>
                <img src={pin} style={{marginBottom: 0, marginRight: '0.7em'}}/>Amsterdam
              </span>
            </subtitle>
            <p>
              A training and user feedback session on how to rapidly develop applications using a new strategy of choreographed microservices on the Asyncy Platform using Storyscript. 
            </p>
            <button className='secondary'>
              RSVP
            </button>
          </div>

        </div>

        <div className='column'>
          <h5>Education & Training Events</h5>

          <Link to="/" style={{ color: '#00AAFF' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Link>
          <p>June 22 • Amsterdam</p>
        </div>
      </div>
    </section>
  </div>
)

export default EventPage
