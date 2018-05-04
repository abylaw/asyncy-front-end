import React from 'react'
import Hero from '../components/Hero'

import calendar from '../assets/images/icon_calendar.svg'
import pin from '../assets/images/icon_pin.svg'
import launchPartyImg from '../assets/images/launch-party.png'

const data = {
  title: 'Upcoming Events',
  subtitle: 'Connect with the Asyncy community at conferences, meetups, and hackathons around the world.',
  events: [
    {
      title: 'Asyncy Launch Party',
      description: 'Join us for the official beta launch of Asyncy. Meet the team, launch your first applications and boat around the canals!',
      date: 'Late September 2018',
      image: launchPartyImg,
      location: 'Amsterdam',
      onClick: () => window.typeform.launchparty.open(),
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
        <div className='column is-three-quarters' style={{
          margin: '0 auto',
        }}>
          {
            data.events.map((event, index) => {
              return <div className='columns' key={index} style={{
                padding: '2.2em 0',
                borderBottom: (index === data.events.length - 1) ? 'none' : '1px solid #41434A'
              }}>
                <div className='column is-narrow'>
                  <div>
                    <img style={{
                      height: '145px',
                      width: '145px',
                      borderRadius: '4px',
                    }} src={event.image}/>
                  </div>
                </div>
                <div className='column'>
                  <h4>{event.title}</h4>
                  <subtitle className="level" style={{
                    display: 'block',
                    color: '#CCCCD0',
                    fontSize: '0.9em',
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
                  <a onClick={event.onClick} href={event.link}>
                    <button className='secondary'>
                      RSVP
                    </button>
                  </a>
                </div>
              </div>
            })
          }
          </div>
      </div>
    </section>
  </div>
)

export default EventPage
