<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-document',
                        index: 'goodsData',
                        title: '商品销售数据'
                    },
                    // {
                    //     icon: 'el-icon-document',
                    //     index: 'shopData',
                    //     title: '店铺数据'
                    // },
                    // {
                    //     icon: 'el-icon-document',
                    //     index: 'activityData',
                    //     title: '活动数据',
                    //     subs: [
                    //         {
                    //             index: 'activityStore',
                    //             title: '店铺'
                    //         },
                    //         {
                    //             index: 'activityItem',
                    //             title: '单品'
                    //         }
                    //     ]
                    // },
                    // {
                    //     icon: 'el-icon-document',
                    //     index: 'operateData',
                    //     title: '运营动作记录数据',
                    //     subs: [
                    //         {
                    //             index: 'operateStore',
                    //             title: '店铺'
                    //         },
                    //         {
                    //             index: 'operateItem',
                    //             title: '单品'
                    //         }
                    //     ]
                    // },
                    // {
                    //     icon: 'el-icon-document',
                    //     index: 'salesData',
                    //     title: '销售目标数据'
                    // },
                    // {
                    //     icon: 'el-icon-document',
                    //     index: 'competeData',
                    //     title: '竞争数据'
                    // },
                    {
                        icon: 'el-icon-document',
                        index: 'industryData',
                        title: '生意参谋市场行情行业大盘数据'
                    },
                    {
                        icon: 'el-icon-document',
                        index: 'channelCost',
                        title: '渠道费用'
                    },
                    {
                        icon: 'el-icon-document',
                        index: 'customerCost',
                        title: '客户成本（按日）'
                    },
                    {
                        icon: 'el-icon-document',
                        index: 'customerAddress',
                        title: '客户地址（按日增量）'
                    },
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
<style>
    .iconfont {
        font-size: 18px;
        margin-right: 10px;
    }
</style>

