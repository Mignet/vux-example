<template>
  <div>
    <swiper :list="imgs" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    <group title="热门活动" class="activity-list">
      <cell v-for="x in Objlist" link="/detail">
        <span slot="title">
          <span class="risk">{{x.platform.riskDisplay}}</span>
          <span v-if="x.isFirst" class="first">首投</span>
          <span v-if="x.isRepetition" class="repetition">复投</span>
        {{x.platform.name}}/{{x.title}}</span>
        <span slot="inline-desc">投资{{x.bestDeposit}}元获得<b>{{x.bestMoney}}</b>元，年化<b>{{x.bestInterest}}%</b></span>
      </cell>
    </group>
  </div>
</template>
<style>  
@import '../assets/css/app.css';
</style> 
<script>
  import { Swiper,Scroller,Group,Cell } from 'vux';

  import { getList } from '../rest/api'

  const imgList = [
    'https://m.jspfanli.com/upload/banner/mobile/400180%E9%87%91%E7%AE%97.jpg',
    'https://m.jspfanli.com/upload/banner/mobile/%E4%B9%90%E5%8A%A9%E8%B4%B7bannerwap.png'
  ]

  const urlList = imgList.map((one, index) => ({
    url: 'javascript:',  //这里填写图片点击的链接
    img: one
  }))
  export default {
    data () {
      return {
        imgs:urlList,
        Objlist:[]
    }
  },
  components: {
      Scroller,
      Cell,
      Group,
      Swiper,
  },
  created () {
    this.getList()
  },
  ready () {
    console.log('home')
  },
  methods:{
    async getList() {
      // let data =await getList("first", "",0,"")
      //local data for offline test
      let data = {"errorCode": 0, "count": 18, "total": 18, "list": [{"status": 10, "bestMoney": 199, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 24.25, "title": "\u7b2c3\u671f", "platform": {"risk": "A", "name": "\u70b9\u725b\u91d1\u878d", "logo": "https://m.jspfanli.com/upload/platform/logo/dianniu.png", "riskDisplay": "\u4fdd\u5b88", "id": 168, "riskCompensation": 0}, "isRepetition": false, "joins": 1301, "bestDeposit": 10000, "id": 453, "statusDisplay": "\u6b63\u5e38"}, {"status": 10, "bestMoney": 10, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 53.25, "title": "\u7b2c1\u671f", "platform": {"risk": "C", "name": "\u7816\u5934\u7f51", "logo": "https://m.jspfanli.com/upload/platform/logo/zt.png", "riskDisplay": "\u8fdb\u53d6", "id": 217, "riskCompensation": 0}, "isRepetition": true, "joins": 3015, "bestDeposit": 500, "id": 257, "statusDisplay": "\u6b63\u5e38"}, {"status": 10, "bestMoney": 825, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 33.48, "title": "\u7b2c1\u671f", "platform": {"risk": "B", "name": "\u4e50\u52a9\u8d37", "logo": "https://m.jspfanli.com/upload/platform/logo/lzd.png", "riskDisplay": "\u7a33\u5065", "id": 183, "riskCompensation": 0}, "isRepetition": true, "joins": 2351, "bestDeposit": 10000, "id": 528, "statusDisplay": "\u6b63\u5e38"}, {"status": 10, "bestMoney": 315, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 38.42, "title": "\u7b2c1\u671f", "platform": {"risk": "B", "name": "\u946b\u60a6\u8d37", "logo": "https://m.jspfanli.com/upload/platform/logo/QQ%E6%88%AA%E5%9B%BE20180515164057.png", "riskDisplay": "\u7a33\u5065", "id": 452, "riskCompensation": 0}, "isRepetition": true, "joins": 795, "bestDeposit": 10000, "id": 736, "statusDisplay": "\u6b63\u5e38"}, {"status": 10, "bestMoney": 135, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 16.52, "title": "\u7b2c1\u671f", "platform": {"risk": "B", "name": "\u5305\u516c\u6709\u8d22", "logo": "https://m.jspfanli.com/upload/platform/logo/QQ%E6%88%AA%E5%9B%BE20180630181257.png", "riskDisplay": "\u7a33\u5065", "id": 491, "riskCompensation": 0}, "isRepetition": false, "joins": 184, "bestDeposit": 10000, "id": 777, "statusDisplay": "\u6b63\u5e38"}, {"status": 10, "bestMoney": 141, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 17.23, "title": "\u7b2c1\u671f", "platform": {"risk": "A", "name": "\u7231\u94b1\u8fdb", "logo": "https://m.jspfanli.com/upload/platform/logo/iqj.png", "riskDisplay": "\u4fdd\u5b88", "id": 135, "riskCompensation": 0}, "isRepetition": false, "joins": 211, "bestDeposit": 10000, "id": 234, "statusDisplay": "\u6b63\u5e38"}, {"status": 10, "bestMoney": 148, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 18.13, "title": "\u7b2c1\u671f", "platform": {"risk": "A", "name": "\u968f\u624b\u8bb0", "logo": "https://m.jspfanli.com/upload/platform/logo/ssj.png", "riskDisplay": "\u4fdd\u5b88", "id": 69, "riskCompensation": 0}, "isRepetition": false, "joins": 309, "bestDeposit": 10000, "id": 774, "statusDisplay": "\u6b63\u5e38"}, {"status": 10, "bestMoney": 122, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 29.7, "title": "\u7b2c1\u671f", "platform": {"risk": "C", "name": "\u94dc\u725b\u805a\u8d22", "logo": "https://m.jspfanli.com/upload/platform/logo/QQ%E6%88%AA%E5%9B%BE20180528142650.png", "riskDisplay": "\u8fdb\u53d6", "id": 465, "riskCompensation": 0}, "isRepetition": true, "joins": 641, "bestDeposit": 5000, "id": 750, "statusDisplay": "\u6b63\u5e38"}, {"status": 10, "bestMoney": 175, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 21.32, "title": "\u7b2c1\u671f", "platform": {"risk": "B", "name": "\u5149\u6c47\u4e91\u6cb9", "logo": "https://m.jspfanli.com/upload/platform/logo/QQ%E6%88%AA%E5%9B%BE20180518122529.png", "riskDisplay": "\u7a33\u5065", "id": 456, "riskCompensation": 0}, "isRepetition": true, "joins": 804, "bestDeposit": 10000, "id": 740, "statusDisplay": "\u6b63\u5e38"}, {"status": 10, "bestMoney": 332, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 40.42, "title": "\u7b2c1\u671f", "platform": {"risk": "C", "name": "\u8d22\u5b9d\u7406\u8d22", "logo": "https://m.jspfanli.com/upload/platform/logo/200x70px__A.png", "riskDisplay": "\u8fdb\u53d6", "id": 453, "riskCompensation": 0}, "isRepetition": false, "joins": 835, "bestDeposit": 10000, "id": 737, "statusDisplay": "\u6b63\u5e38"}, {"status": 10, "bestMoney": 74, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 181.33, "title": "\u7b2c1\u671f", "platform": {"risk": "E", "name": "\u91d1\u62bd\u5c49", "logo": "https://m.jspfanli.com/upload/platform/logo/QQ%E6%88%AA%E5%9B%BE20180418125355.png", "riskDisplay": "\u9ad8\u8fd4", "id": 429, "riskCompensation": 0}, "isRepetition": false, "joins": 1335, "bestDeposit": 500, "id": 714, "statusDisplay": "\u6b63\u5e38"}, {"status": 10, "bestMoney": 36, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 44.3, "title": "\u7b2c1\u671f", "platform": {"risk": "C", "name": "\u60a0\u54c9\u732b", "logo": "https://m.jspfanli.com/upload/platform/logo/QQ%E6%88%AA%E5%9B%BE20180326151856.jpg", "riskDisplay": "\u8fdb\u53d6", "id": 416, "riskCompensation": 0}, "isRepetition": false, "joins": 1504, "bestDeposit": 1000, "id": 698, "statusDisplay": "\u6b63\u5e38"}, {"status": 10, "bestMoney": 316, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 38.42, "title": "\u7b2c1\u671f", "platform": {"risk": "C", "name": "\u9152\u638c\u67dc", "logo": "https://m.jspfanli.com/upload/platform/logo/TIM%E6%88%AA%E5%9B%BE20171115160815.png", "riskDisplay": "\u8fdb\u53d6", "id": 354, "riskCompensation": 0}, "isRepetition": false, "joins": 2551, "bestDeposit": 10000, "id": 604, "statusDisplay": "\u6b63\u5e38"}, {"status": 10, "bestMoney": 27, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 67.97, "title": "\u7b2c1\u671f", "platform": {"risk": "C", "name": "\u5916\u5feb\u7406\u8d22", "logo": "https://m.jspfanli.com/upload/platform/logo/QQ%E6%88%AA%E5%9B%BE20180223110835.jpg", "riskDisplay": "\u8fdb\u53d6", "id": 391, "riskCompensation": 0}, "isRepetition": false, "joins": 2038, "bestDeposit": 1000, "id": 659, "statusDisplay": "\u6b63\u5e38"}, {"status": 10, "bestMoney": 155, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 18.91, "title": "\u7b2c1\u671f", "platform": {"risk": "A", "name": "\u56e2\u8d37\u7f51", "logo": "https://m.jspfanli.com/upload/platform/logo/tdw_CLd8wma.png", "riskDisplay": "\u4fdd\u5b88", "id": 73, "riskCompensation": 0}, "isRepetition": false, "joins": 2915, "bestDeposit": 10000, "id": 65, "statusDisplay": "\u6b63\u5e38"}, {"status": 10, "bestMoney": 779, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 31.6, "title": "\u7b2c2\u671f", "platform": {"risk": "B", "name": "\u767e\u91d1\u8d37", "logo": "https://m.jspfanli.com/upload/platform/logo/baijindai.png", "riskDisplay": "\u7a33\u5065", "id": 109, "riskCompensation": 0}, "isRepetition": false, "joins": 3297, "bestDeposit": 10000, "id": 518, "statusDisplay": "\u6b63\u5e38"}, {"status": 10, "bestMoney": 20, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 248.33, "title": "\u7b2c4\u671f", "platform": {"risk": "A", "name": "\u7f51\u4fe1\u7406\u8d22", "logo": "https://m.jspfanli.com/upload/platform/logo/wx.png", "riskDisplay": "\u4fdd\u5b88", "id": 4, "riskCompensation": 0}, "isRepetition": false, "joins": 3738, "bestDeposit": 100, "id": 593, "statusDisplay": "\u6b63\u5e38"}, {"status": 10, "bestMoney": 187, "isFirst": true, "bestName": "\u65b9\u68481", "bestInterest": 22.82, "title": "\u7b2c2\u671f", "platform": {"risk": "B", "name": "\u7f51\u5229\u5b9d", "logo": "https://m.jspfanli.com/upload/platform/logo/wanglibao.png", "riskDisplay": "\u7a33\u5065", "id": 16, "riskCompensation": 0}, "isRepetition": true, "joins": 3026, "bestDeposit": 10000, "id": 38, "statusDisplay": "\u6b63\u5e38"}], "pageId": 18};
      console.log(data)
      var news_list=data.list;
      if(news_list.length>0){
        for(var i=0;i<news_list.length;i++){
          this.Objlist.push(news_list[i]);
        }

      }
      this.locked = false
      this.loading = false
    }
  }
}
</script>