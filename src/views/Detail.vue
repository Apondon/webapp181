<template>
    <div class="detail">
        <div class="detailInfo">
            <nut-row>
                <nut-col :span="8">
                    <div class="img"></div>
                </nut-col>
                <nut-col :span="16">
                    <div class="info">
                        <div>{{name}}</div>
                        <div>
                            <nut-rate  v-model="score"  :readOnly="true" :size='15'></nut-rate>
                        </div>
                        <div>{{rank}}</div>
                        <div>{{tag.join('、')}}</div>
                        <div>{{`演员: ${actor.join(',')}`}}</div>
                        <div>{{`上映时间: ${date}`}}</div>
                    </div>
                </nut-col>
            </nut-row>
        </div>
        <div class="detailText">{{text}}</div>
        <div class="detailBtn" @click="clickHandle">立即订购</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {
                    id:1,
                    name:'芳华',
                    score:5,
                    rank:'9.9',
                    tag:['剧情','爱情','战争'],
                    actor:['黄轩','苗苗'],
                    date:'2020-04-13 10:14',
                    text:'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动'
                },
                {
                    id:2,
                    name:'芳华华',
                    score:4,
                    rank:'8.9',
                    tag:['剧情','爱情','战争'],
                    actor:['黄轩','苗苗'],
                    date:'2020-04-13 10:14',
                    text:'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动'
                },
                {
                    id:3,
                    name:'芳芳华',
                    score:3,
                    rank:'7.9',
                    tag:['剧情','爱情','战争'],
                    actor:['黄轩','苗苗'],
                    date:'2020-04-13 10:14',
                    text:'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动'
                },
                {
                    id:4,
                    name:'芳华芳华',
                    score:2,
                    rank:'6.9',
                    tag:['剧情','爱情','战争'],
                    actor:['黄轩','苗苗'],
                    date:'2020-04-13 10:14',
                    text:'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动'
                },
            ],
            //显示在页面上的数据

            name:'',
            rank:9.5,
            score:5,
            tag:[],
            actor:[],
            text:'',
            date:''
        }
    },
    mounted(){
        // 获取明文传参的值
        // console.log(this.$route.query)
        // 获取非明文传参的值
        console.log(this.$route.params)
        
        const id = this.$route.params.id

        for(const data of this.list){
            if(data.id == id){
                this.name = data.name
                this.score = data.score
                this.rank = data.rank
                this.tag = data.tag
                this.actor = data.actor
                this.text = data.text
                this.date = data.date
            }
        }    
    },
    methods:{
        clickHandle(){
            this.$router.push({
                name:'Theater',
                params:{
                    name:this.name,
                    rank:this.rank
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.detail{
    height: 100%;
    display: flex;
    flex-direction: column;
    .detailInfo{
        height: 180px;
        background: cornsilk;
        padding: 10px;
        .img{
            width: 100%;
            height: 180px;
            background: lightblue;
        }
        .info{
            margin-left: 10px;
            text-align: left;
        }
    }
    .detailText{
        flex:1;
        background: darkgray;
        box-sizing: border-box;
        padding: 10px;
        text-align: left;
    }
    .detailBtn{
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #fff;
        background: cornflowerblue;
    }
}
</style>