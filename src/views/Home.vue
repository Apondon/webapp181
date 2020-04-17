<template>
  <div class="home">
      <div class="homeTitle">影片</div>
      <div class="warpper">
        <div class="cardItem" v-for="item in list" :key='item.id'>
          <nut-row>
            <nut-col :span="8">
                <div class="imgWarp">
                  <div class="img"></div>
                </div>
            </nut-col>
            <nut-col :span="16">
                <div class="msg">
                  <div class="movName">{{item.name}}</div>
                  <div class="movMsg">
                    <span>{{item.mov}}</span>
                    <span>{{item.sen}}</span>
                    <span>{{item.rank}}</span>
                  </div>
                  <div class="movTag">{{item.tag.join('、')}}</div>
                  <div class="movAtr">{{item.actor.join(',')}}</div>
                  <nut-button small @click="clickHandle(item.id)">购票</nut-button>
                </div>
            </nut-col>
        </nut-row>
        </div>
      </div>
      <Footer mark='home'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  data(){
    return{
      list:[
        {
          id:1,
          name:'芳华',
          rank:'9.9分',
          mov:'2D',
          sen:'IMAX',
          tag:['剧情','爱情','战争'],
          actor:['黄轩','苗苗'] 
        },
        {
          id:2,
          name:'芳华华',
          rank:'8.9分',
          mov:'2D',
          sen:'IMAX',
          tag:['剧情','爱情','战争'],
          actor:['黄轩','苗苗'] 
        },
        {
          id:3,
          name:'芳芳华',
          rank:'7.9分',
          mov:'2D',
          sen:'IMAX',
          tag:['剧情','爱情','战争'],
          actor:['黄轩','苗苗'] 
        },
        {
          id:4,
          name:'芳华芳华',
          rank:'6.9分',
          mov:'2D',
          sen:'IMAX',
          tag:['剧情','爱情','战争'],
          actor:['黄轩','苗苗'] 
        },
      ]
    }
  },
  components: {
    Footer
  },
  methods:{
    clickHandle(id){
      console.log(id)
      // this.$router.push('/detail')
      // 路由传参
      // 明文传参
      // 1.直接拼接
      // this.$router.push(`/detail?id=${id}`)
      // 2.使用query传参
      // this.$router.push({
      //   path:'/detail',
      //   query:{
      //     id:id
      //   }
      // })
      // 非明文传参
      this.$router.push({
        name:'Detail',
        params:{
          id:id
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  height: 100% - 60;
  flex:1;
  display: flex;
  flex-direction: column;
  .homeTitle{
      height: 44px;
      line-height: 44px;
      background: #fff;
      color: rgb(59, 79, 231);
  }
  .warpper{
    flex: 1;
    overflow-y: auto;
    
    .cardItem{
      background: lightgray;
      .imgWarp,.msg{
        height: 180px;
        width: 100%;
        box-sizing: border-box;
        padding:3px;
      }  
      .img{
        width: 100%;
        height: 100%;
        background: red;
      }
      .movName,.movMsg,.movTag,.movAtr{
        text-align: left;
      }
    }
  }
}
</style>