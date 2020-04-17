<template>
    <div id='footer'>
        <nut-row>
            <nut-col :span="8">
                <div :class="mark==='home'?'flex-content active':'flex-content'" @click="clickHandle(1)">
                    <span class="iconfont">&#xe642;</span>
                    <span class="words">电影</span>
                </div>
            </nut-col>
            <nut-col :span="8">
                <div :class="mark==='order'?'flex-content active':'flex-content'" @click="clickHandle(2)">
                    <span class="iconfont">&#xe610;</span>
                    <span class="words">订单</span>
                </div>
            </nut-col>
            <nut-col :span="8">
                <div :class="mark==='user'?'flex-content active':'flex-content'" @click="clickHandle(3)">
                    <span class="iconfont">&#xe61d;</span>
                    <span class="words">我的</span>
                </div>
            </nut-col>
        </nut-row>
    </div>
</template>
<script>
export default {
    name:'Footer',
    props:{
        // 当前组件是被哪个页面加载出来的
        mark:{
            default:'',
            type: String
        }
    },
    methods:{
        clickHandle(num){
            if(num === 1) this.$router.push('/')
            if(num === 2) this.$router.push('/order')
            if(num === 3) this.$router.push('/user')

        }
    }
}
</script>
<style lang="scss" scoped>
.flex-content{
    height: 44px;
    display:flex;
    flex-direction: column;
    background: rgb(120, 164, 244);
    color:#fff;
    .iconfont{
        font-size:20px;
    }
    .words{
        font-size: 12px;
    }
    &.active{
        color:orange;
    }
}
</style>