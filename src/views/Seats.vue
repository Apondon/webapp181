<template>
    <div class="seats">
        <div class="seatsTitle">
            <div class='movName'>{{name}}</div>
            <div class="roomInfo">{{roomInfo}}</div> 
        </div>
        <div class='chooseSeats'>
            <span class="screen">{{`${roomName}荧幕`}}</span>
            <div class='seatsBox'>
                <span v-for='n in seats' :key='n' class="iconfont">&#xe69a;</span>
            </div>
        </div>
        <div class="seatsState">
            <!-- 可选 -->
            <span class="words">可选</span>
            <span class="iconfont choosing">&#xe69a;</span>
            <!-- 已选 -->
            <span class="words">已选</span>
            <span class="iconfont choosed">&#xe69a;</span>
            <!-- 已售 -->
            <span class="words">已售</span>
            <span class="iconfont salled">&#xe69a;</span>
        </div>
        <div class="tickets">
            <div class="ticketsTitle">已选座位</div>
            <div class="ticketsBox">
                <div class='ticketsCard'>
                    <!-- 座位信息 -->
                    <div class="tktSeat">{{`一排一座`}}</div>
                    <!-- 价格 -->
                    <div class='tktPrice'>{{`￥33`}}</div>
                </div>
            </div>
        </div>
        <div class="cfmBtn" @click='payTickets'>确认选座</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:'',
            roomInfo:'今天10:30',
            roomName:'',
            seats:60,
        }
    },
    mounted(){
        const data = this.$route.params
        this.name = data.name
        this.roomInfo = `今天${data.time}`
        this.roomName = data.room
    },
    methods:{
        // 绑定给每个座位的事件
        seatsClick(){

        },
        // 绑定给每张票的事件
        ticketsClick(){

        },
        // 结算
        payTickets(){
            alert('结算成功')
        }

    }
}
</script>
<style lang="scss" scoped>
    $bl_clr:rgb(22, 33, 180);
    @mixin flx($direction:column){
        flex:1;
        display:flex;
        flex-direction: $direction;
    }
    .seats{
        @include flx;
        .seatsTitle{
            height: 50px;
            text-align: left;
            padding-left: 5px;
            border-bottom:1px solid #888;
            .movName{
                line-height: 30px;
                font-size: 20px;
                color: $bl_clr;
            }
            .roomInfo{
                line-height: 20px;
                font-size: 14px;
                color:#777
            }
        }

        .chooseSeats{
            height: 350px;
            background: antiquewhite;
            @include flx;
            flex:0;
            .screen{
                height: 20px;
                background: lightseagreen;
            }
            .seatsBox{
                @include flx(row);
                // 超出部分换行
                flex-wrap:wrap; 
                // 水平居中
                justify-content: center;
            }

        }

        .seatsState{
            height: 34px;
            line-height: 34px;
            .words{
                position:relative;
                bottom:5px;
            }
            .choosed{
                color:lime;
            }
            .salled{
                color:rgb(218, 18, 18);
            }
        }
        .tickets{
            flex:1;
            .ticketsTitle{
                text-align: left;
                text-indent: 5px;
                height: 20px;
                line-height: 20px;
            }
            .ticketsBox{
                @include flx(row);
                height: 100%;
                background: lightgreen;
                flex-wrap:wrap;
                justify-content:flex-start;
                overflow-y: auto;
                box-sizing: border-box;
                padding:5px;
                .ticketsCard{
                    width:30%;
                    height: 40px;
                    border:1px solid #888;
                    margin-bottom: 3px;
                    .tktPrice{
                        color:orange ;
                    }
                    
                }
            }
        }

        .cfmBtn{
            height: 40px;
            line-height: 40px;
            background: $bl_clr;
            color:#fff;
        }
        .iconfont{
            font-size: 34px;
            color:lightgrey;
        }
    }
</style>