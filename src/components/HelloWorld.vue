<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Vuex</h2>
    <router-link to="/vuex">ShoppingCart Example</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  mounted() {
    this.hello()
    const a = '11'
  },
  methods: {
    hello() {
      // console.log('Hello world')
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
