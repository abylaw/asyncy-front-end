import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'
import TeamMember from '../components/TeamMember'

import placeholder from '../assets/placeholder.svg'

import steve from '../assets/Steve.png'
import jerrod from '../assets/Jerrod.png'
import whitney from '../assets/Whitney.png'

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
    image: placeholder,
  }
}

const AboutPage = () => (
  <div>
    <Hero title={data.title} subtitle={data.subtitle}></Hero>

    <div style={{
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
        <div style={{
          margin: '45px 0',
          textAlign: 'center',
        }}>
          <img src={data.office.image} />
        </div>
      </section>
    </div>
  </div>
)

export default AboutPage
