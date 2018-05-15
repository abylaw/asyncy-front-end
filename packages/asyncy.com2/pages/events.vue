<template>
  <div>
    <page-background
      :leftImage="headerLeft"
      :rightImage="headerRight"
      :scale="0.6"
      :leftX="-380"
      :leftY="35"
      :rightX="-160"
      :rightY="40"
    />
    <hero :title="title" :subtitle="subtitle"></hero>

    <section class='section' :style="{
      maxWidth: '1000px',
    }">
      <div class='columns'>
        <div class='column is-three-quarters' :style="{
          margin: '0 auto',
        }">
          <div v-for="(event, key) in events" class='columns' :key="key" :style="{
            padding: '2.2em 0',
            borderBottom: (index === events.length - 1) ? 'none' : '1px solid #41434A'
          }">
            <div class='column is-narrow'>
              <div>
                <img :style="{
                  height: '145px',
                  width: '145px',
                  borderRadius: '4px',
                }" :src="event.image"/>
              </div>
            </div>
            <div class='column'>
              <h4>{{event.title}}</h4>
              <subtitle class="level" :style="{
                display: 'block',
                color: '#CCCCD0',
                fontSize: '0.9em',
                margin: '0.8em 0',
              }">
                <span :style="{
                  marginRight: '1em',
                }">
                  <img :src="calendar" :style="{marginBottom: 0, marginRight: '0.7em'}"/>{{event.date}}
                </span>
                <span>
                  <img :src="pin" :style="{marginBottom: 0, marginRight: '0.7em'}"/>{{event.location}}
                </span>
              </subtitle>
              <p>
                {{event.description}}
              </p>
              <a :href="event.link" data-mode="popup" data-hide-headers="true" data-hide-footer="true" target="_blank">
                <button class='secondary'>
                  RSVP
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '../components/Hero'
import PageBackground from '../components/PageBackground'

import headerLeft from '../assets/images/events-header-left.svg'
import headerRight from '../assets/images/events-header-right.svg'
import calendar from '../assets/images/icon_calendar.svg'
import pin from '../assets/images/icon_pin.svg'
import launchPartyImg from '../assets/images/launch-party.png'

export default {
  components: { Hero, PageBackground },
  data() {
    return {
      headerLeft,
      headerRight,
      calendar,
      pin,
      title: 'Upcoming Events',
      subtitle: 'Connect with the Asyncy community at conferences, meetups, and hackathons around the world.',
      events: [
        {
          title: 'Asyncy Launch Party',
          description: 'Join us for the official beta launch of Asyncy. Meet the team, launch your first applications and boat around the canals!',
          date: 'Late September 2018',
          image: launchPartyImg,
          location: 'Amsterdam',
          link: 'https://asyncy.typeform.com/to/ySbpV8',
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
    };
  },
}
</script>
