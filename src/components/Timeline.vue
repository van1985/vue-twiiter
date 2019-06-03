<template>
    <div class="timeline">
        <div class="reload-button">Ver Tweets nuevos</div>    
        <div v-for="(item, index) in timeline.data" class="tweet" :key="index">
            <div class="header">
                <img class="avatar-image" width="50" height="50" :src="item.user.profile_image_url" />
                <div class="info-user">
                    <div class="label-username">{{item.user.name}}</div>
                    <div class="label-twitterUsr">@{{item.user.screen_name}}</div>
                </div>
            </div>
            <div class="tweet-text" v-html="item.text"></div>
            <div class="tweet-footer">
                <div class="item">
                    <img class="img-heart" width="20" height="20" src="../assets/heart.png" />
                    <p class="label-heart">{{item.favorite_count}}</p>
                </div>
                <div class="item">
                    <img class="img-heart" width="20" height="20" src="../assets/spinner11.png" />
                    <p class="label-heart">{{item.retweet_count}}</p>
                </div>
                <div class="item">
                    <img class="img-heart" width="23" height="23" src="../assets/bubble2.png" />
                    <p class="label-heart">1</p>
                </div>
            </div>
        </div>
        <p></p>
    </div>
</template>

<script>
//import User from './User.vue';

export default {
  name: 'Timeline',
  props: {
    timeline: Object,
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeline {
  padding-top:15px;
  }

  .tweet {
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border-top: 1px solid #e6ecf0;
    border-bottom: 1px solid #e6ecf0;
  }

  .reload-button {
    background-color:#E8F5FD;
    color: #1da1f2;
    font-size: 14px;
    border-bottom: 1px solid #e6ecf0;
    border-top: 1px solid #e6ecf0;
    text-align: center;
    height:42px;
    display: block;
    font-weight: normal;
    line-height: 42px;
  }

  .header{
      flex: 1 1 160px;
  }

  .avatar-image{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: inline-block;
    float: left;
    padding: 15px;
  }

  .info-user{
      display: inline-block;
      float: left;
      padding: 22px 5px;
  }

  .tweet-text{
      padding: 0px 20px 15px 20px;
      text-align: left;
  }

  .label-username {
      font-weight: bold;
      float: left;
  }

  .label-twitterUsr{
        color: #657786;
        float: left;
        font-size: 14px;
        padding-left: 10px;
        padding-top: 2px;
  }

  .icon {
    display: inline-block;
    width: 48px;
    height: 48px;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }

  .tweet-footer {
      display: flex;
      flex-direction: row;
      justify-content: center;
  }

  .item {
      width: 60px;
  }

  .img-heart {
    display: inline-block;
  }

  .label-heart {
      font-size: 11px;
      display: inline-block;
      padding: 0 3px;
      line-height: 15px;
  }
</style>


