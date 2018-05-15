<template>
  <div>
    <page-background :left-image="headerLeft" :right-image="headerRight"/>
    <Hero :title="title" :subtitle="subtitle"></Hero>

    <div :style="{
      marginTop: '100px',
      maxWidth: '780px',
      marginLeft: 'auto',
      marginRight: 'auto',
    }">
      <section class='section'>
        <div class='has-text-centered'><h2>Our Story</h2></div>
        <p :style="{
          textAlign: 'justified'
        }">
          {{text}}
        </p>
      </section>

      <section class='section'>
        <div class='has-text-centered'><h2>Our Team</h2></div>
        <div class='columns' :style="{
          marginTop: '40px',
        }">
          <div v-for="(member, key) in teamMembers" class='column' :key="key">
            <TeamMember :name="member.name" :role="member.role" :twitter-handle="member.twitter" :images="member.images"/>
          </div>
        </div>
      </section>

      <section class='section'>
        <div class='has-text-centered'><h2>Office</h2></div>
        <div class='level address-container' :style="{
          maxWidth: '425px',
          margin: '0 auto',
        }">
          <div class='level-left'>
            <p>
              <span v-for="(line, key) in office.address" :key="key">{{line}}<br/></span>
            </p>
          </div>
          <div class='level-right'>
            <a :href="`https://www.google.com/maps/search/?api&${mapsQuery}`">
              <button class='secondary'>Get directions</button>
            </a>
          </div>
        </div>
      </section>
    </div>
    <div :style="{
      marginTop: '-65px',
      marginBottom: '90px',
      width: '100vw',
      height: '425px',
      marginLeft: '-25px',
      textAlign: 'center',
    }">
      <div :style="{
        width: '100%',
        height: '100%',
      }" id='map'></div>
    </div>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import TeamMember from '~/components/TeamMember'
import PageBackground from '~/components/PageBackground'

import steve from '~/assets/images/Steve.png'
import jerrod from '~/assets/images/Jerrod.png'
import whitney from '~/assets/images/Whitney.png'
import headerLeft from '~/assets/images/about-header-left.svg'
import headerRight from '~/assets/images/about-header-right.svg'

export default {
  components: {
    Hero,
    PageBackground,
    TeamMember,
  },
  data() {
    return {
      steve,
      jerrod,
      whitney,
      headerLeft,
      headerRight,
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
      },
    };
  },
  computed: {
    mapsQuery() {
      return `q=${encodeURIComponent(this.office.address.join(',').replace(/ /g, '+'))}`;
    },
  }
}
</script>

<style scoped>
.address-container {
  @media(max-width: 768px) {
    text-align: center;
  }
}

</style>
