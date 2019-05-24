<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/account">Account</router-link>
    </div>
    <router-view></router-view>
    <img alt="Vue logo" src="./assets/logo.png">{{msg}}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import User from './components/User.vue'

export default {
  name: 'app',
  data: function() {
    return {
      msg: 'Welcome to your Vue.js App 2'
    }
  },
  components: {
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
