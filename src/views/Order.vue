<template>
    <div class="order">
        <div class="warpper">
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
            ]
        }
    },
    components:{
        Footer
    }
}
</script>
<style lang="scss" scoped>
.order{
  height: 100%;
  display: flex;
  flex-direction: column;
  .warpper{
    flex: 1;
    overflow-y: auto;
    .orderCard{
        text-align: left;
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
}
</style>