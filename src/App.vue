<template>
	<div id="app" style="height:100%;">
  	<!-- main content -->
  	<view-box ref="viewBox" body-padding-bottom="100px">
	  	<app-header slot="header"></app-header>
	    <router-view></router-view>
	    <app-footer slot="bottom"></app-footer>  
	</view-box>
  </div>
</template>

<script>
import {ViewBox, Loading, TransferDom } from 'vux'
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
export default {
  name: 'app',
  components:{
  	ViewBox,
  	Loading,
  	AppHeader,
  	AppFooter,
  }
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html, body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
