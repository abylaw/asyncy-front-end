<template>
  <div>
    <section class='section' :style="{
      textAlign: 'center',
    }">
      <h1>404</h1>
      <h3>Oops. The page you were looking for doesn't exist.</h3>
      <p>You may have mistyped the address or the page may have moved</p>

      <nuxt-link to='/'><button class='secondary'>Go to homepage</button></nuxt-link>
    </section>
  </div>
</template>
