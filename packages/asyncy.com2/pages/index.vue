<template>
  <div>
    <page-background
      :left-image="headerLeft"
      :right-image="headerRight"
      :scale="0.7"
      :left-x="-320"
      :left-y="-55"
      :right-x="-85"
      :right-y="-60"
    />
    <div
      :style="{
        marginTop: '70px',
        marginBottom: '55px',
      }"
    >
      <div
        :style="{
          width: '100%',
          textAlign: 'center',
        }"
      >
        <h1 :style="{ fontSize: '3.2em' }">{{title}}</h1>
        <p class="subtitle">{{subtitle}}</p>
        <div :style="{
          maxWidth: '560px',
          margin: '45px auto 0 auto',
        }">
          <email-form :btn-style="{
            backgroundColor: 'white',
            color: '#515CF9',
          }"/>
        </div>
      </div>
    </div>

    <section :style="{
      backgroundImage: `url(${purpleBg})`,
      backgroundColor: '#7A33D7',
      width: '100vw',
      padding: '1px 25px',
      marginLeft: '-25px',
    }">
      <div :style="{
        maxWidth: '1000px',
        margin: '0 auto',
      }">
        <alternating-two-columns :text-data="sections" />
      </div>
    </section>

    <section :style="{
      backgroundColor: '#21223A',
      width: '100vw',
      padding: '100px 25px',
      marginLeft: '-25px',
    }">
      <div class='columns' :style="{
        maxWidth: '1200px',
        margin: '0 auto',
      }">
        <div v-for="(usecase, index) in usecases" class='column' :key="index" style="{
          '@media (max-width: 768px)': {
            textAlign: 'center',
            marginBottom: '1em',
          },
        }">
          <img :src="usecase.icon" :style="{
            marginBottom: '0.8em',
          }"/>
          <h3>{{usecase.title}}</h3>
          <p class='usecase-description' style="{
            maxWidth: '320px',
            fontSize: '1em',
            lineHeight: '1.95em',
          }">
            {{usecase.description}}</p>
        </div>
      </div>

      <div :style="{
        textAlign: 'center',
        marginTop: '90px',
      }">
        <h2>{{community.title}}</h2>
      </div>

    </section>


    <div :style="{
      margin: '0px auto',
      transform: 'translate(0, -50%)',
      textAlign: 'center',
      maxWidth: '800px',
      backgroundColor: '#00C584',
      padding: '35px 15px 10px 15px',
      borderRadius: '4px',
      boxShadow: '0 1px 13px 0 rgba(0,0,0,0.5)',
    }">
      <h3 :style="{
        marginBottom: '1.1em',
      }">Sign up to get updates</h3>
      <div :style="{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '10px 0'
      }">
        <email-form :input-style="{
          backgroundColor: 'rgba(240, 240, 240, 1)',
          color: 'rgba(100, 100, 100, 1)',
          boxShadow: '0px 1px 3px #4AB390',
        }" :btn-style="{
          backgroundColor: '#008257',
          color: 'white',
        }"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AlternatingTwoColumns from '~/components/AlternatingTwoColumns.vue'
import EmailForm from '~/components/EmailForm.vue'
import PageBackground from '~/components/PageBackground.vue'

import placeholder from '~/assets/images/placeholder.svg'
import appsIcon from '~/assets/images/icon_apps.svg'
import automationIcon from '~/assets/images/icon_automation.svg'
import integrationIcon from '~/assets/images/icon_integration.svg'
import headerLeft from '~/assets/images/home-header-left.svg'
import headerRight from '~/assets/images/home-header-right.svg'
import purpleBg from '~/assets/images/purple-bg-pattern.svg'

export default {
  components: {
    AppLogo,
    AlternatingTwoColumns,
    EmailForm,
    PageBackground,
  },
  data: () => {
    return {
      headerLeft,
      headerRight,
      purpleBg,
      title: 'Write stories, then code.',
      subtitle: 'The choreographed microservice platform for rapid application development.',
      sections: [
        {
          title: 'Meet Storyscript',
          description: 'Inspired by the Zen of Python where functions are microservices, Storyscript is a high-level language that can be used to orchestrate microservices in an algorithmic way.',
          image: placeholder,
          link: 'https://docs.asyncy.com/#storyscript',
          linkText: 'Learn More'
        },
        {
          title: 'Microservice choreography',
          description: 'Microservice Choreography is an architecture layer above orchestration eliminating service coupling and seperates logic from code with limited to no devops. Perfect for rapid application prototyping to production.',
          image: placeholder,
          link: '/platform',
          linkText: 'Learn More'
        }
      ],
      usecases: [
        {
          title: 'Applications',
          description: 'Prototype applications 10-100x quicker on a production-grade platform powered by microservices. Perfect for backends and APIs.',
          icon: appsIcon,
        },
        {
          title: 'Automation',
          description: 'Transparent, long-running logic for customer retention and marketing automation. Perfect for social media and cron jobs.',
          icon: automationIcon,
        },
        {
          title: 'Integration',
          description: 'Seamlessly connect services and applications with reusable containers. Perfect for devops, webhooks and bots.',
          icon: integrationIcon,
        },
      ],
      community: {
        title: 'Learn with the community',
      },
      opensource: {
        title: 'Open Source',
        description: 'Run Asyncy in any environment. Locally, or on our hosted cloud.',
      },
    };
  },
}
</script>

<style scoped lang="styl">
.usecase-description
  @media (max-width: 768px) and (min-width: 400px)
    max-width: 500px
    margin: 0 auto

</style>
