<template>
    <div class="user">
        <div class="warpper">   
            <div class="userMethod" v-for='item in list' :key='item.id'>
                <span class="leftSpan">{{item.name}}</span>
                <span class="rightSpan">></span>
            </div>
            <nut-button block @click='clickHandle'>点击退出</nut-button>
        </div>
        <Footer mark='user' />
    </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
export default {
    data(){
        return{
            list:[
                {
                    id:1,
                    name:'我的订单'
                },
                {
                    id:2,
                    name:'优惠券'
                },
                {
                    id:3,
                    name:'影院会员卡'
                },
                {
                    id:4,
                    name:'想看的电影'
                },
                {
                    id:5,
                    name:'看过的电影'
                },
            ]
        }
    },
    components:{
        Footer
    },
    methods:{
        clickHandle(){
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="scss" scoped>
.user{
  height: 100%;
  display: flex;
  flex-direction: column;
  .warpper{
    flex: 1;
    overflow-y: auto;
    .userMethod{
        display: flex;
        height: 40px;
        align-items: center;
        border-bottom: 1px solid #f3f3f3;
        .leftSpan{
            text-align: left;
            text-indent: 10px;
            flex: 1;
        }
        .rightSpan{
            width: 40px;
        }
    }
  }
}
</style>