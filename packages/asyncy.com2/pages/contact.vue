<template>
  <div>
    <PageBackground
      :leftImage="headerLeft"
      :rightImage="headerRight"
      :leftX="-500"
      :leftY="-150"
    />

    <Hero :title="title" :subtitle="subtitle"></Hero>

    <section class='section' :style="{
      maxWidth: '900px',
    }">
      <div class='columns'>
        <div v-for="(contact, key) in contacts" class='column' :key="key">
          <div :style="{
            maxWidth: '420px',
            margin: '0 auto',
            backgroundColor: '#262626',
            borderRadius: '4px',
            padding: '40px 34px 24px 34px',
            fontSize: '0.9em',
          }">
            <div :style="{
              textAlign: 'center',
              paddingBottom: '0.7em',
            }">
              <h4>{{contact.title}}</h4>
            </div>
            <p>{{contact.description}}</p>
            <a class="item typeform-share button" href="https://asyncy.typeform.com/to/GAr52V" data-mode="popup" data-hide-headers="true" data-hide-footer="true" target="_blank">
              <button class='secondary' :style="{
                marginTop: '1em',
                width: '100%',
                fontSize: '1em',
              }">
                {{contact.linkText}}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '../components/Hero'
import PageBackground from '../components/PageBackground'

import headerLeft from '../assets/images/contact-header-left.svg'
import headerRight from '../assets/images/contact-header-right.svg'

export default {
  components: { Hero, PageBackground },
  data() {
    return {
      title: 'Contact Us',
      subtitle: 'Get in touch and let us know how we can help.',
      contacts: [
        {
          title: 'Sales',
          description: `We'd love to talk about how we can work together.`,
          linkText: 'Contact Sales',
          link: '/',
        },
        {
          title: 'Help & Support',
          description: `We're here to help with any questions or concerns.`,
          linkText: 'Contact Support',
          link: '/',
        },
        {
          title: 'Media & Press',
          description: `Get asyncy news, company info, and media resources.`,
          linkText: 'Contact Press',
          link: '/',
        },
      ],
    }
  }
}
</script>
