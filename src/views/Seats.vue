<template>
    <div class="seats">
        <div class="seatsTitle">
            <div class='movName'>{{name}}</div>
            <div class="roomInfo">{{roomInfo}}</div> 
        </div>
        <div class='chooseSeats'>
            <span class="screen">{{`${roomName}荧幕`}}</span>
            <div class='seatsBox'>
                <div v-for='item in seatsData' :key='item.id' class="seatsItem" @click="seatsClick(item)">
                    <span :class="item.status === 1?'iconfont choosed':item.status === 2?'iconfont salled':'iconfont'" >&#xe69a;</span>
                    <span class="seatsCol">{{item.col}}</span>
                </div> 
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
                <div class='ticketsCard' v-for='item in ticketsData' :key='item.id' @click='ticketsClick(item)'>
                    <!-- 座位信息 -->
                    <div class="tktSeat">{{`${item.row}排 ${item.col}座`}}</div>
                    <!-- 价格 -->
                    <div class='tktPrice'>{{`￥33`}}</div>
                </div>
            </div>
        </div>
        <div class="cfmBtn" @click='payTickets'>{{`${total}确认选座`}}</div>
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
            price:33, //每个座位的价格
            // 座位数据
            seatsData:[
                // id 每个座位的id, row 座位在第几排 , col 座位在第几列 , status 座位状态 0 可选 1 已选 2 已售
                // 1-10 第一行
                { id:1, row:1, col:1, status:0},
                { id:2, row:1, col:2, status:0},
                { id:3, row:1, col:3, status:0},
                { id:4, row:1, col:4, status:0},
                { id:5, row:1, col:5, status:0},
                { id:6, row:1, col:6, status:0},
                { id:7, row:1, col:7, status:0},
                { id:8, row:1, col:8, status:0},
                { id:9, row:1, col:9, status:0},
                { id:10, row:1, col:10, status:0},

                // 11-20 第二行
                { id:11, row:2, col:1, status:0},
                { id:12, row:2, col:2, status:0},
                { id:13, row:2, col:3, status:0},
                { id:14, row:2, col:4, status:0},
                { id:15, row:2, col:5, status:0},
                { id:16, row:2, col:6, status:0},
                { id:17, row:2, col:7, status:0},
                { id:18, row:2, col:8, status:0},
                { id:19, row:2, col:9, status:0},
                { id:20, row:2, col:10, status:0},

                // 21-30 第三行
                { id:21, row:3, col:1, status:0},
                { id:22, row:3, col:2, status:0},
                { id:23, row:3, col:3, status:0},
                { id:24, row:3, col:4, status:0},
                { id:25, row:3, col:5, status:0},
                { id:26, row:3, col:6, status:0},
                { id:27, row:3, col:7, status:0},
                { id:28, row:3, col:8, status:0},
                { id:29, row:3, col:9, status:0},
                { id:30, row:3, col:10, status:0},

                // 31-40 第四行
                { id:31, row:4, col:1, status:0},
                { id:32, row:4, col:2, status:0},
                { id:33, row:4, col:3, status:0},
                { id:34, row:4, col:4, status:0},
                { id:35, row:4, col:5, status:0},
                { id:36, row:4, col:6, status:0},
                { id:37, row:4, col:7, status:0},
                { id:38, row:4, col:8, status:0},
                { id:39, row:4, col:9, status:0},
                { id:40, row:4, col:10, status:0},

                // 41-50 第五行
                { id:41, row:5, col:1, status:0},
                { id:42, row:5, col:2, status:0},
                { id:43, row:5, col:3, status:0},
                { id:44, row:5, col:4, status:0},
                { id:45, row:5, col:5, status:0},
                { id:46, row:5, col:6, status:0},
                { id:47, row:5, col:7, status:0},
                { id:48, row:5, col:8, status:0},
                { id:49, row:5, col:9, status:0},
                { id:50, row:5, col:10, status:0},

                // 51-60 第六行
                { id:51, row:6, col:1, status:0},
                { id:52, row:6, col:2, status:0},
                { id:53, row:6, col:3, status:0},
                { id:54, row:6, col:4, status:0},
                { id:55, row:6, col:5, status:0},
                { id:56, row:6, col:6, status:0},
                { id:57, row:6, col:7, status:0},
                { id:58, row:6, col:8, status:0},
                { id:59, row:6, col:9, status:0},
                { id:60, row:6, col:10, status:0},
            ],
            // 电影票数据
            ticketsData:[]
        }
    },
    computed:{
        total(){
            return this.ticketsData.length>0?`￥${this.ticketsData.length * this.price} `:''
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
        seatsClick(item){
            // item.status 0可购买 1已选择 2已售出
            // 每点击一次座位(状态可购买)  1.生成一张电影票 2.将该座位可购买状态更改为已选择
            if(item.status === 0){
                item.status = 1
                this.ticketsData.push(item)
                return false //中断后续代码执行
            }
            // 每点击一次座位(状态为已选择) 1.取消已选择的电影票 2.将该座位的已选择状态改为可购买
            if(item.status === 1){
                item.status = 0
                for(let i=0;i<this.ticketsData.length;i++){
                    if(this.ticketsData[i].id === item.id){
                        this.ticketsData.splice(i,1)
                        break;
                    }
                }
                return false //中断后续代码执行
            }
            // 每点击一次座位(状态为已售出)  不能做任何操作
            if(item.status === 2) return false
        },
        // 绑定给每张票的事件
        ticketsClick(item){
            // 只要有一张电影票被生成 则说明被占有了一个座位
            //  点击单个电影票，表示用户不再需要该电影票 1.删除该电影票 2.将该电影票占有的座位释放 座位状态从已选择重置为可购买
            // 1.删除该电影票
            for(let i=0;i<this.ticketsData.length;i++){
                if(this.ticketsData[i].id === item.id){
                    this.ticketsData.splice(i,1)
                    break;
                }
            }
            // 2.将该电影票占有的座位释放 座位状态从已选择重置为可购买
            for(const obj of this.seatsData){
                if(obj.id === item.id) obj.status = 0
            }
        },
        // 结算
        payTickets(){
            // 考虑电影票状态 
            // 1.有要结算的票 2.没有要结算的票
            // 有要结算的票
            // 1.计算总价 2.结算 1> 将结算的票从视图中清除 2>将结算的座位状态置为已售出
            
            // 没有要结算的票 
            // 提示用户先去选票

            // 1.有要结算的票
            if(this.ticketsData.length){
                alert('结算成功')
                for(let i = 0;i<this.ticketsData.length;i++){
                   for(let j = 0;j<this.seatsData.length;j++){
                       if(this.ticketsData[i].id === this.seatsData[j].id){
                           this.seatsData[j].status = 2
                           break
                       }
                   }
                } 
                // 生成订单信息
                // 获取座位数据
                let seats = [] // 保存座位数据
                for(const t of this.ticketsData){
                    seats.push(`${t.row}排 ${t.col}座`)
                }
                // 生成订单数据
                let orderObj= {
                    id:new Date().getTime(), //订单id
                    name:this.name,//电影名
                    num:this.ticketsData.length, //票数
                    date:this.roomInfo, // 播放时间
                    seats:seats, //座位信息
                    price:this.ticketsData.length*this.price,
                    status:'已完成'
                }

                let storage = localStorage.getItem('order')
                
                // 1.判断之前是否有订单信息
                let arr = [] // 若之前无订单记录
                if(!!storage)//若存在之前的订单记录
                    arr = JSON.parse(storage)   
                
                arr.push(orderObj)
                localStorage.setItem('order',JSON.stringify(arr))

                this.ticketsData = []

            }else alert('请先选择座位')   // 2.没有要结算的票 

            
            
        },
        // split(){
            // 拆分生成class名的三目运算
        //     // item.status === 1?'iconfont choosed':item.status === 2?'iconfont salled':'iconfont'
        //     let str ='' // str代替class
        //     if(item.status === 1){ //?
        //         str = 'iconfont choosed'
        //     }else{ //:
        //         if(item.status === 2){//?
        //             str = 'iconfont salled'
        //         } else{ // :
        //             str = 'iconfont'
        //         }
        //     }
        // }

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
            height: 360px;
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
                .seatsItem{
                    display: flex;
                    flex-direction: column;
                    width:10%;
                }
            }

        }

        .seatsState{
            height: 34px;
            line-height: 34px;
            .words{
                position:relative;
                bottom:5px;
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
        .choosed{
                color:lime;
        }
        .salled{
            color:rgb(218, 18, 18);
        }
    }
</style>