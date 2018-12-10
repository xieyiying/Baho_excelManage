import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/goodsData'
        },
        {
            path: '/',
            component: () => import('@/components/common/Home.vue'),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/goodsData',
                    component: () => import('@/modules/GoodsData/GoodsData.vue'),
                    meta: { title: '商品销售数据' }
                },
                // {
                //     path: '/shopData',
                //     component: () => import('@/modules/ShopData/ShopData.vue'),
                //     meta: { title: '店铺数据' }
                // },
                // {
                //     path: '/activityStore',
                //     component: () => import('@/modules/ActivityData/activityStore.vue'),
                //     meta: { title: '店铺活动数据' }
                // },
                // {
                //     path: '/activityItem',
                //     component: () => import('@/modules/ActivityData/activityItem.vue'),
                //     meta: { title: '单品活动数据' }
                // },
                // {
                //     path: '/operateStore',
                //     component: () => import('@/modules/OperateData/operateStore.vue'),
                //     meta: { title: '店铺运营动作记录数据' }
                // },
                // {
                //     path: '/operateItem',
                //     component: () => import('@/modules/OperateData/operateItem.vue'),
                //     meta: { title: '单品运营动作记录数据' }
                // },
                // {
                //     path: '/salesData',
                //     component: () => import('@/modules/SalesData/salesData.vue'),
                //     meta: { title: '销售目标数据' }
                // },
                // {
                //     path: '/competeData',
                //     component: () => import('@/modules/CompeteData/competeData.vue'),
                //     meta: { title: '竞争数据' }
                // },
                {
                    path: '/industryData',
                    component: () => import('@/modules/IndustryData/industryData.vue'),
                    meta: { title: '生意参谋市场行情行业大盘数据' }
                },
                {
                    path: '/channelCost',
                    component: () => import('@/modules/ChannelCost/ChannelCost.vue'),
                    meta: { title: '渠道费用' }
                },
                {
                    path: '/customerCost',
                    component: () => import('@/modules/CustomerCost/CustomerCost.vue'),
                    meta: { title: '客户成本（按日）' }
                },
                {
                    path: '/customerAddress',
                    component: () => import('@/modules/CustomerAddress/CustomerAddress.vue'),
                    meta: { title: '客户地址（按日增量）' }
                },
            ]
        },
        {
            path: '/login',
            component: () => import('@/components/page/Login.vue')
        },
        {
            path: '/404',
            component: () => import('@/components/page/404.vue')
        },
        {
            path: '/403',
            component: () => import('@/components/page/403.vue')
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
