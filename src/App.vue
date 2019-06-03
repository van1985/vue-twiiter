<template>
  <div id="app" class="wrapper">
    <div class="header">
      <NavBar />
    </div>
    <div class="main">
      <Timeline :timeline=timelineResponse  />
    </div>
    <div class="aside aside-1">
         <Trends />  
    </div>
    <div class="aside aside-2">
      <Advertising />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Timeline from './components/Timeline.vue'
import Advertising from './components/Advertising.vue'
import Profile from './components/Profile.vue'
import Trends from './components/Trends.vue'

import axios from 'axios';

export default {
  name: 'app',
  data: function() {
      const timelineResponse = timelineResponse ? timelineResponse : {};
      return{
        timelineResponse,
      }
  },
  components: {
    NavBar,
    Timeline,
    Advertising,
    Profile,
    Trends,
  },
  mounted () {
    axios
      .get('http://localhost:8000/timeline?count=100')
      .then(response => (this.timelineResponse = response))
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e6ecf0;
}


.wrapper {
  display: flex;
  flex-flow: row wrap;
}

/* We tell all items to be 100% width, via flex-basis */
.wrapper > * {
  flex: 1 100%;
}

/* We rely on source order for mobile-first approach
 * in this case:
 * 1. header
 * 2. article
 * 3. aside 1
 * 4. aside 2
 * 5. footer
 */

/* Medium screens */
@media all and (min-width: 600px) {
  /* We tell both sidebars to share a row */
  .aside { flex: 1 auto; }
}

/* Large screens */
@media all and (min-width: 800px) {
  /* We invert order of first sidebar and main
   * And tell the main element to take twice as much width as the other two sidebars 
   */
  .main { flex: 2 0px; }
  .aside-1 { order: 1; }
  .main    { order: 2; }
  .aside-2 { order: 3; }
  .footer  { order: 4; }
}

.body {
  margin: 0;
}
</style>
