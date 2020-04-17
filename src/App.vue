<template>
  <div id="app">
    <nut-navbar 
      style="background-color:rgb(59, 79, 231); color: #fff; height:60px; line-height: 60px;"
      :leftShow="showBack" 
      :rightShow="false"
      @on-click-back="backHandle"
      v-if='showHead'
      >
      {{pageName}}
    </nut-navbar>
    <keep-alive>
        <router-view v-if='$route.meta.keepAlive'/>
    </keep-alive>
    <router-view v-if='!$route.meta.keepAlive'/>
    
  </div>
</template>
<script>
export default {
  data(){
    return {
      showBack:false,
      showHead:true,
      pageName:'主页',
      route:[
        { name:'主页', routeName:'Home', flag:false },
        { name:'详情页', routeName:'Detail', flag:true },
        { name:'订单', routeName:'Order', flag:false },
        { name:'个人中心', routeName:'User', flag:false },
        { name:'影院', routeName:'Theater', flag:true },
        { name:'选座', routeName:'Seats', flag:true },
        { name:'注册', routeName:'Register', flag:true },

      ]
    }
  },
  watch:{
    '$route'(newVal){
     
      if(newVal.name == 'Login') this.showHead = false
      else this.showHead = true


      for(const item of this.route){
        if(item.routeName == newVal.name){
          this.pageName = item.name
          if(item.flag) this.showBack = true
          else this.showBack = false
          break
        }
      }
    }
  },
  methods:{
    backHandle(){
      this.$router.back()
    }
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html,body{
  height:100% ;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
}
</style>
