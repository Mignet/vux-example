<template>

<x-header slot="header" >{{title}}
  <router-link slot="right" to="/login">登录</router-link>
</x-header>

</template>
<style scoped>
.vux-header{
  background-color:#1AAD19;
}
.vux-header .vux-header-left a, .vux-header .vux-header-left button, .vux-header .vux-header-right a, .vux-header .vux-header-right button{
  color:#fff;
}
</style>
<script>
    import { XHeader } from 'vux'

    export default{
     name: 'AppHeader',
     components: {
       XHeader
     },
     data(){
            return{
                title:'P2P网贷理财返利平台'
            }
     },
     methods: {
       resultClick (item) {
          alert('you click the result item: ' + JSON.stringify(item))
       },
       getResult (val) {
          this.results = val
       }
     },
    }

</script>