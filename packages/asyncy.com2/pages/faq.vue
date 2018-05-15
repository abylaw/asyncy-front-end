<template>
  <div>
    <div class="outer-container">
      <div class="container">
        <h1 class="h1">Frequently Asked Questions</h1>

        <h3>What are microservices?</h3>

        <p>Microservices Wikipedia page is a great place to start.</p>

        <h3>Who maintains the microservices?</h3>

        <p>The project contributors maintain the service. This may be open-source projects, vendor built projects, or private projects. To have a service compatible with Asyncy there is very litle configuration required, learn more here.</p>

        <h3>Why use a domain-specific language?</h3>

        <p>We believe a syntax-light language that is highly readable is important. Asyncy aims to reduce complexity, so our language should represent this. After exploring other languages such as Node, Python, and Java we found a number of issues that required us to "think differently".</p>

        <h3>How difficult is it to build my own services?</h3>

        <p>Use any programming language necessary to build your service just like you would a library, package, or application. To have a service compatible with Asyncy there is very litle configuration required, learn more here.</p>

        <h3>Can I bring my own database?</h3>
        <p>Yes, this is actually the only way. Asyncy is a platform for execution and we do not provide the underlining services. But we make it really easy to create them, however, you have to manage your own database.</p>

        <p>We recommend using Heroku Postgres, Amazon RDS, RedisLabs or CloudAMQP just to name a few.</p>

        <h3>How much Kubernetes or devops experience is required?</h3>

        <p>Little to none. Asyncy interacts with Kubernetes so you don't need to. It manages scaling, security, routing, networks and much more.</p>

        <h3>Can my Storyscripts and custom services be private code?</h3>

        <p>Microservices are slower than single-threaded applications. But with proper design this difference in speed is not noticable. Asyncy adds very little overhead with Storyscript execution and uses the best practices to have container execute as quickly as possible.</p>

        <h3>What are some current limitations to Asyncy?</h3>

        <p>Time-sensitive HTTP traffic should not be synchronously bound to a Storyscript execution. This was a known limitation from the start, but comes at no surprise. Building UI pages needs to be handled by a threaded server. However, Asyncy des provides a "serverless" environment simular to AWS Lambda.</p>

        <h3>Where are Storyscript's and other code stored?</h3>

        <p>Asyncy relies on GitHub for many things including storing source code. This has significant benifits with portability, version controlling and security.</p>

        <h3>How are user permissions handled?</h3>

        <p>Asyncy relies on GitHub as user authentication and permission. This has significant benifits to the platform and a powerful level of security and team transparency. We use GitHub Teams as a granular permission scope.</p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="styl">
.outer-container
  background-color white
  color black
  padding 45px 0
  width 100vw
  margin-left -25px
.container
  max-width 800px
  margin 0 auto
  .h1
    margin-bottom 1em
    text-align center
  h3
    margin-top 1.5em
</style>
