import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'
import TwoColumn from '../components/TwoColumn'
import AlternatingTwoColumn from '../components/AlternatingTwoColumn'

import styles from './index.module.css'

const PlatformPage = ({ data }) => (
  <div>
    <Hero title='A Complete Platform' subtitle='Designed to give developers all the tools to effectively run microservices through choreography. A symphony that make rapid application development a reality.'></Hero>

    <section className='section'>
      <h2>The Stack</h2>
      <subtitle>The foundation of the Asyncy Platform</subtitle>
    </section>
  </div>
)

export default PlatformPage
