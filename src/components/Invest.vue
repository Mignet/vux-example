<template>
  <div>
    <group title="热门活动" class="activity-list">
        <cell is-link link="/detail">
          <span slot="title"><span class="first">首投</span>团贷网/第1期</span>
          <span slot="inline-desc">投资10000元获得<b>155</b>元，年化<b>18.9%</b></span>
        </cell>
    </group>
  </div>
</template>
<style>  
@import '../assets/css/app.css';
</style> 
<script>
  import { Swiper,Scroller,Group,Cell } from 'vux';


  export default {
    data () {
      return {
        imgs:null,
    }
  },
  components: {
      Scroller,
      Cell,
      Group,
      Swiper,
  },
  created () {
    console.log(this.$route.query.type)
  },
  methods:{

  }
}
</script>