<template>
    <div class="theater">
        <h1 class="theaterTitle">
            {{name}}
            <span>{{`${rank}分`}}</span>
        </h1>
        <div class="theaterCard" v-for='item in list' :key='item.id'>
            <nut-row>
                <nut-col :span="6">
                    <div class="movTime">{{item.date}}</div>
                </nut-col>
                <nut-col :span="6">
                    <div class="movRoom">{{item.room}}</div>
                </nut-col>
                <nut-col :span="6">
                    <div class="movPrice">{{item.price}}</div>
                </nut-col>
                <nut-col :span="6">
                    <div class="buyBtn">
                        <span @click="clickHandle(item)">立即购买</span>
                    </div>
                </nut-col>
            </nut-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:'芳华',
            rank:9,
            list:[
                {
                    id:1,
                    date:'10:30',
                    room:'国语3D三号厅',
                    price:'33.5'
                }
            ]
        }
    },
    methods:{
        clickHandle(item){
            this.$router.push({
                name:'Seats',
                params:{
                    name:this.name, // 电影名
                    room:item.room, // 放映厅
                    time:item.date, // 放映时间
                    price:item.price // 票价
                }
            })
        }
    },
    mounted(){
        const data = this.$route.params
        this.name = data.name
        this.rank = data.rank
    }
}
</script>

<style lang="scss" scoped>
.theater{
    height: 100%;
    background: lightgray;
    .theaterTitle{
        height: 44px;
        line-height: 44px;
        background: #fff;
        color: rgb(38, 110, 219);
        font-size: 22px;
        span{
            font-size: 18px;
            color: rgb(238, 223, 91);
        }
    }
    .movTime,.movRoom,.movPrice,.buyBtn{
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        height: 80px;
        background: white;
        margin:10px 0;
    }
    .buyBtn{
        span{
            display: inline-block;
            padding: 3px 8px;
            border: 1px solid rgb(38, 110, 219);
            color: rgb(38, 110, 219);
        }
    }
}
</style>