<template>
  <div>
    <Hero :title="title" :subtitle="subtitle"></Hero>

    <section class='section' :style="{
      maxWidth: '1100px',
    }">
      <AlternatingTwoColumn :reversed="true" :textData="textData" />
    </section>

    <section class='section' :style="{
      textAlign: 'center',
    }">
      <h2>The Stack</h2>
      <subtitle>The foundation of the Asyncy Platform</subtitle>
      <div :style="{
        margin: '45px 0',
      }">
        <img :style="{
          width: '100%',
        }" :src="placeholder" />
      </div>
    </section>

    <section class='section' :style="{
      textAlign: 'center',
      maxWidth: '525px',
    }">
      <div :style="{
        textAlign: 'left'
      }"><h2>Sign up to get updates</h2></div>
      <div :style="{
        margin: '30px 0',
      }">
        <EmailForm placeholder='Your Email' btnText='Sign up'/>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import EmailForm from '~/components/EmailForm'
import AlternatingTwoColumn from '~/components/AlternatingTwoColumns'

import listIcon from '~/assets/images/icon_list.svg'
import circleIcon from '~/assets/images/icon_circle.svg'
import squareIcon from '~/assets/images/icon_square.svg'
import placeholder from '~/assets/images/placeholder.svg'

export default {
  components: {
    Hero,
    EmailForm,
    AlternatingTwoColumn,
  },
  data() {
    return {
      placeholder,
      title: 'The Asyncy Platform',
      subtitle: 'Open source, full-stack platform with a symphony of tools and workflows for rapid application development.',
      textData: [
        {
          title: 'Hub',
          description: 'The Asyncy Hub is the service discovery frontend. Developers can submit services in the form of Docker containers, functions or Storyscripts. Public and private services coexist in the Hub as a central registry for discovery and documentation.',
          items: [
            { icon: circleIcon, text: 'Hundreds of open source services' },
            { icon: squareIcon, text: 'Premium subscription based services' },
            { icon: listIcon, text: 'Anonymous, cross-application metrics' },
          ],
          image: placeholder,
        },
        {
          title: 'Application',
          description: 'The Asyncy App is the dashboard for managing your applications. Deploying, scaling, metrics, monitoring and security built-in.',
          image: placeholder,
        },
        {
          title: 'Storyscript',
          description: 'A syntax-light, expressive and readable language that choreographs microservices. Think the Zen of Python with Docker built-in.',
          linkText: 'Read documentation',
          link: 'https://docs.asyncy.com/#storyscript',
          image: placeholder,
        },
        {
          title: 'Atom Plugin',
          description: 'The Atom Plugin is designed to assist development by providing the services programmers expect: syntax highlighting, linting, dry-runs and autocomplete. A side panel provides a window into the Asyncy Hub for embedded service discover. Write, debug and run your story all within Atom. (Visual Studio Code support coming soon)',
          image: placeholder,
        },
        {
          title: 'Engine',
          description: 'The Asyncy Engine executes Storyscripts which choreograph microservices. A light-weight infrastructure layer above Kubernetes powering the Asyncy Platform.',
          image: placeholder,
        }
      ],
    }
  }
}
</script>
