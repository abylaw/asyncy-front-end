import React from 'react'
import Hero from '../components/Hero'

import calendar from '../assets/icon_calendar.svg'
import pin from '../assets/icon_pin.svg'
import placeholderEventImage from '../assets/placeholder_event_image.svg'

const data = {
  title: 'Upcoming Events',
  subtitle: 'Connect with the Asyncy community at conferences, meetups, and hackathons around the world.',
  events: [
    {
      title: 'Asyncy Microhack',
      description: 'A training and user feedback session on how to rapidly develop applications using a new strategy of choreographed microservices on the Asyncy Platform using Storyscript.',
      date: 'March 1 2018',
      image: placeholderEventImage,
      location: 'Amsterdam',
      link: '/'
    },
    {
      title: 'Asyncy Launch Party',
      description: 'Join us for the official beta launch of Asyncy. Meet the team, launch your first applications and boat around the canals!',
      date: 'October 2018',
      image: placeholderEventImage,
      location: 'Amsterdam',
      link: '/'
    }
  ],
  learningEvents: [
    {
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      link: '/',
      date: 'June 22',
      location: 'Amsterdam',
    },
    {
      title: 'Vestibulum auctor dapibus neque.',
      link: '/',
      date: 'June 24',
      location: 'Amsterdam',
    }
  ]
}


const EventPage = () => (
  <div>
    <Hero title={data.title} subtitle={data.subtitle}></Hero>

    <section className='section' style={{
      maxWidth: '1000px',
    }}>
      <div className='columns'>
        <div className='column is-three-quarters'>
          {
            data.events.map((event, index) => {
              return <div className='columns' key={index} style={{
                padding: '2.2em 0',
                borderBottom: (index === data.events.length - 1) ? 'none' : '1px solid #41434A'
              }}>
                <div className='column is-narrow'>
                  <div style={{
                    height: '145px',
                    width: '145px',
                    borderRadius: '4px',
                  }}>
                    <img src={event.image}/>
                  </div>
                </div>
                <div className='column'>
                  <h4>{event.title}</h4>
                  <subtitle style={{
                    display: 'block',
                    color: '#CCCCD0',
                    fontSize: '0.8em',
                    margin: '0.8em 0',
                  }}>
                    <span style={{
                      marginRight: '1em',
                    }}>
                      <img src={calendar} style={{marginBottom: 0, marginRight: '0.7em'}}/>{event.date}
                    </span>
                    <span>
                      <img src={pin} style={{marginBottom: 0, marginRight: '0.7em'}}/>{event.location}
                    </span>
                  </subtitle>
                  <p>
                    {event.description}
                  </p>
                  <a href={event.link}>
                    <button className='secondary'>
                      RSVP
                    </button>
                  </a>
                </div>
              </div>
            })
          }
          </div>

        <div className='column'>
          <h5>Education & Training Events</h5>

          <ul style={{
            marginLeft: 0,
            listStyle: 'none',
          }}>
          {
            data.learningEvents.map((event, index) => (
              <li key={index} style={{
                marginBottom: '1em',
              }}>
                <a href={event.link} style={{ color: '#00AAFF' }}>
                  {event.title}
                </a>
                <p style={{
                  fontSize: '0.8em',
                }}>{event.date} • {event.location}</p>
              </li>
            ))
          }
          </ul>
        </div>
      </div>
    </section>
  </div>
)

export default EventPage
