import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'

import styles from './index.module.css'

const AboutPage = ({ data }) => (
  <div>
    <Hero title='About Us' subtitle='Shaping the power of microservices to make it truly approachable for individual developers or teams of any size.'></Hero>

    <section className='section'>
      <h2>Our story</h2>
      <p>
        Our mission is to shape the power of microservices using Storyscript, a high-level programming language that can be used to choreograph microservices, making it truly approachable for individual developers or teams of any size. Developers are now able to focus on core application logic, eliminating the complexity involved in producing an application. The FOSS (Free and Open Source) Asyncy Platform manages the cloud infrastructure without reducing applications’ flexibility, paving the way for swift application development (10-100X faster), where developers write the logic in Storyscript, which choreographs services written in any language or library. 
      </p>
    </section>

    <section className='section'>
      <h2>Our Team</h2>
    </section>

    <section className='section'>
      <h2>Office</h2>
      <p>
        Our HQ is in Amsterdam, one of Europe’s fastest growing tech hubs; a city whose culture offers ideal work–life balance, cultivating a sustainable and energetic habitat. 
      </p>
    </section>
  </div>
)

export default AboutPage
