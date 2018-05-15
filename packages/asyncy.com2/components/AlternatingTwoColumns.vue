<template>
  <div>
    <div v-for="(data, index) in textData" :key="index" class='columns' :style="{
      margin: '65px 0',
    }">
      <div class='column is-narrow' :style="{
        order: (index + (reversed ? 1 : 0)) % 2,
        '@media (max-width: 768px)': {
          order: 0,
        }
      }">
        <div :style="{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }">
          <img :style="{
            marginBottom: 0,
            width: '100%',
          }" :src="data.image"/>
        </div>
      </div>
      <div class='column'>
        <div :style="{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
          height: '100%',
        }">
          <h2>{{data.title}}</h2>
          <p>{{data.description}}</p>
          <ul v-if="data.items" :style="{
            minWidth: '380px',
            paddingLeft: 0,
            listStyle: 'none'
          }">
            <li v-for="(item, index) in data.items" :key="index" :style="{
              height: '4em',
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid #333',
              marginBottom: 0,
              ':last-child': {
                borderBottom: 'none',
              }
            }">
              <img :src="item.icon" :style="{
                marginRight: '0.4em',
              }"/> {{item.text}}
            </li>
          </ul>
          <nuxt-link v-if="data.linkText" :to="data.link">
            <button class='secondary'>{{data.linkText}}</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['reversed', 'textData'],
};
</script>
