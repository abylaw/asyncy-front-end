import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'
import TeamMember from '../components/TeamMember'
import PageBackground from '../components/PageBackground'

import steve from '../assets/images/Steve.png'
import jerrod from '../assets/images/Jerrod.png'
import whitney from '../assets/images/Whitney.png'
import headerLeft from '../assets/images/about-header-left.svg'
import headerRight from '../assets/images/about-header-right.svg'

const data = {
  title: 'About Us',
  subtitle: 'Shaping the power of microservices to make it truly approachable for individual developers or teams of any size.',
  text: 'Our mission is to shape the power of microservices using Storyscript, a high-level programming language that can be used to choreograph microservices, making it truly approachable for individual developers or teams of any size. Developers are now able to focus on core application logic, eliminating the complexity involved in producing an application. The FOSS (Free and Open Source) Asyncy Platform manages the cloud infrastructure without reducing applications’ flexibility, paving the way for swift application development (10-100X faster), where developers write the logic in Storyscript, which choreographs services written in any language or library.',
  teamMembers: [
    {
      name: 'Steve Peak',
      role: 'Founder',
      twitter: 'iopeak',
      images: [steve, steve, steve, steve],
    },
    {
      name: 'Jerrod Engelberg',
      role: 'Operations',
      twitter: '',
      images: [jerrod, jerrod, jerrod, jerrod],
    },
    {
      name: 'Whitney Caneel',
      role: 'Operations',
      twitter: '',
      images: [whitney, whitney, whitney, whitney],
    }
  ],
  office: {
    title: 'Office',
    description: 'Our HQ is in Amsterdam, one of Europe’s fastest growing tech hubs; a city whose culture offers ideal work–life balance, cultivating a sustainable and energetic habitat.',
    address: ['Hackers & Founders Building', 'Herengracht 504', '1017 CB Amsterdam'],
  }
}

const mapsQuery = `q=${encodeURIComponent(data.office.address.join(',').replace(/ /g, '+'))}`

const AboutPage = () => (
  <div>
    <PageBackground leftImage={headerLeft} rightImage={headerRight}/>
    <Hero title={data.title} subtitle={data.subtitle}></Hero>

    <div style={{
      marginTop: '100px',
      maxWidth: '780px',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <section className='section'>
        <div className='has-text-centered'><h2>Our Story</h2></div>
        <p style={{
          textAlign: 'justified'
        }}>
          {data.text}
        </p>
      </section>

      <section className='section'>
        <div className='has-text-centered'><h2>Our Team</h2></div>
        <div className='columns' style={{
          marginTop: '40px',
        }}>
          {
            data.teamMembers.map((member, index) => (
              <div className='column' key={index}>
                <TeamMember name={member.name} role={member.role} twitterHandle={member.twitter} images={member.images}/>
              </div>
            ))
          }
        </div>
      </section>

      <section className='section'>
        <div className='has-text-centered'><h2>{data.office.title}</h2></div>
        <p>
          {data.office.description} 
        </p>
        <div className='level' css={{
          maxWidth: '425px',
          margin: '0 auto',
          '@media(max-width: 768px)': {
            textAlign: 'center',
          },
        }}>
          <div className='level-left'>
            <p>{
              data.office.address.map((line, key) => 
                <span key={key}>{line}<br/></span>
              )
            }</p>
          </div>
          <div className='level-right'>
            <a href={`https://www.google.com/maps/search/?api&${mapsQuery}`}>
              <button className='secondary'>Get directions</button>
            </a>
          </div>
        </div>
      </section>
    </div>
    <div style={{
      marginTop: '-65px',
      marginBottom: '90px',
      width: '100vw',
      height: '425px',
      marginLeft: '-25px',
      textAlign: 'center',
    }}>
      <div style={{
        width: '100%',
        height: '100%',
      }} id='map'></div>
    </div>
  </div>
)

export default AboutPage
