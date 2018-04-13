import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero'

import styles from './index.module.css'

const EventPage = ({ data }) => (
  <div>
    <Hero title='Upcoming Events' subtitle='Connect with the Asyncy community at conferences, meetups, and hackathons around the world.'></Hero>
  </div>
)

export default EventPage
