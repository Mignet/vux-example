
<template>
  <tabbar slot="bottom">
    <tabbar-item selected :link="{path:'/'}">
      <img slot="icon" src="../assets/image/ic_nav_news_normal.png">
      <img slot="icon-active" src="../assets/image/ic_nav_news_actived.png">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/invest?type=1'}">
      <img slot="icon" src="../assets/image/ic_nav_tweet_normal.png">
      <img slot="icon-active" src="../assets/image/ic_nav_tweet_actived.png">
      <span slot="label">首投</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/invest?type=2'}">
      <img slot="icon" src="../assets/image/ic_nav_discover_normal.png">
      <img slot="icon-active" src="../assets/image/ic_nav_discover_actived.png">
      <span slot="label">复投</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/reg'}">
      <img slot="icon" src="../assets/image/ic_nav_my_normal.png">
      <img slot="icon-active" src="../assets/image/ic_nav_my_actived.png">
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</template>
<style>
.tabbar{
   background-color: #00CC66;
   height: 50px;
   position: fixed;
 }
</style>
<script>
    export default{
      name: 'AppFooter',
      data(){
        return{
          index:0
        }
      }
    }
</script>