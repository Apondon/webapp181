<template>
    <div class="order">
        <div class="warpper" v-if='flag'>
            <div class='showOrder'>
                <div class="orderCard" v-for="item in list" :key='item.id'>
                    <div class="orderUp">
                        <nut-row>
                            <nut-col :span="5">
                                <div class="imgWarp">
                                    <div class="img"></div>
                                </div>
                            </nut-col>
                            <nut-col :span="19">
                                <div class="orderDetail">
                                    <div class="orderTitle">
                                        <span class="movName">{{item.name}}</span>
                                        <span class="movNum">{{`${item.num}张`}}</span>
                                    </div>
                                    <div class="orderDate">{{item.date}}</div>
                                    <div class="orderSeats">{{item.seats.join(',')}}</div>
                                </div>
                            </nut-col>
                        </nut-row>
                    </div>
                    <div class="orderDown">
                        <span class="odrPrice">{{`总价:${item.price}`}}</span>
                        <span class="odrStatus">{{item.status}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="noOrder" v-if='!flag'>当前没有订单信息</div>
        <Footer mark='order'/>
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
                    name:'芳华',
                    num:4,
                    date:'2020-04-10 10:50',
                    seats:[
                        '位置一','位置二','位置三','位置四'
                    ],
                    price:140,
                    status:'已完成'
                }
            ],
            flag:false,
        }
    },
    components:{
        Footer
    },
    mounted(){
        const data = localStorage.getItem('order')
        console.log(data)
        if(!!data){ // 将当前取到的值转换为boolean类型
            this.list = JSON.parse(data)
            this.flag = true 
        }else this.flag = false 
    }
}
</script>
<style lang="scss" scoped>
.order{
  height: 100%-60;
  flex:1;
  display: flex;
  flex-direction: column;
  .warpper{
    flex: 1;
    height: 100%-44;
    .showOrder{
        height: 100%;
        overflow-y: auto;
        background: bisque;
    }
    .orderCard{
        text-align: left;
        margin-bottom: 5px;
        background: #fff;
        .orderUp{
            border-bottom: 1px solid #f3f3f3;
        }
        .imgWarp{
            height: 120px;
            width: 100%;
            box-sizing: border-box;
            padding:3px;
        }  
        .img{
            width: 100%;
            height: 100%;
            background: red;
        }
    }
  }
  .noOrder{
      flex:1;
  }
}
</style>