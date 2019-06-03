<template>
    <div class="trends">
        <div class="trends-title">Tendencias para ti</div>
        <div class="trends-body">
            <div v-for="(item, index) in trendsResponse" class="trends-list" :key="index">
                <div class="trends-item">
                <a class="trends-tweet-link" :href=item.url>{{item.name}}</a>
                {{item.tweet_volume}} mil tweets
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import slice from 'lodash/slice';

export default {
  name: 'Trends',
  data: function() {
      const trendsResponse = trendsResponse ? trendsResponse : {};
      return{
        trendsResponse,
      }
  },
  mounted () {
    
    axios
      .get('http://localhost:8000/trends?id=23424747')
      .then(response => (this.trendsResponse = slice(response.data[0].trends,0,5)))
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trends {
    background-color: white;
    width: 290px;
    margin: 15px 40px;
    float: right;
  }

.trends-title {
    color: #14171a;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    padding: 35px 0px 0px;
}

.trends-body {
    padding: 15px;
    text-align: left;
}

.trends-list {
    padding-left:20px;
}

.trends-tweet-link {
    color: #1DA1F2;
    font-weight: bold;
    display: inline-block;
    width: 100%;
}

.trends-item {
    padding:5px 0;
    display: inline-block;
}
</style>