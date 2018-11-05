import { getRequest, httpUrl, requestParams } from '@/utils/network'

/** 登录接口 */
export const loginUrl = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/user/adUser/login', params)
}

/* 商品销售数据api */

// 列表
export const requestGoodsList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/information/kubInformation/list', params)
}
// 导入Excel
// export const importGoodsExcel = httpUrl + '/mxsmsystem/page/kub/informationcopy/kubInformationcopy/import?' + requestParams
export const importGoodsExcel = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/informationcopy/kubInformationcopy/import?' + requestParam
}
// 下载模板
// export const downloadGoodsTemplate = httpUrl +  '/mxsmsystem/page/kub/informationcopy/kubInformationcopy/import/template?' + requestParams
export const downloadGoodsTemplate = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/informationcopy/kubInformationcopy/import/template?' + requestParam
}



/* 店铺数据api */

// 列表
export const requestStoreList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/shop/kubShop/list', params)
}
// 导入Excel
// export const importStoreExcel = httpUrl + '/mxsmsystem/page/kub/shopcopy/kubShopcopy/import?' + requestParams
export const importStoreExcel = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/shopcopy/kubShopcopy/import?' + requestParam
}
// 下载模板
// export const downloadStoreTemplate = httpUrl + '/mxsmsystem/page/kub/shopcopy/kubShopcopy/import/template?' + requestParams
export const downloadStoreTemplate = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/shopcopy/kubShopcopy/import/template?' + requestParam
}



/* 活动数据api */

/* 店铺活动api */

// 列表
export const requestActivityStoreList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/huodongshop/kubHuodongshop/list', params)
}
// 导入Excel
// export const importActivityStoreExcel = httpUrl + '/mxsmsystem/page/kub/huodongshopcopy/kubHuodongshopcopy/import?' + requestParams
export const importActivityStoreExcel = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/huodongshopcopy/kubHuodongshopcopy/import?' + requestParam
}
// 下载模板
// export const downloadActivityStoreTemplate = httpUrl + '/mxsmsystem/page/kub/huodongshopcopy/kubHuodongshopcopy/import/template?' + requestParams
export const downloadActivityStoreTemplate = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/huodongshopcopy/kubHuodongshopcopy/import/template?' + requestParam
}

/* 单品活动api */

// 列表
export const requestActivityItemList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/huodongitem/kubHuodongitem/list', params)
}
// 导入Excel
// export const importActivityItemExcel = httpUrl + '/mxsmsystem/page/kub/huodongitemcopy/kubHuodongitemcopy/import?' + requestParams
export const importActivityItemExcel = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/huodongitemcopy/kubHuodongitemcopy/import?' + requestParam
}
// 下载模板
// export const downloadActivityItemTemplate = httpUrl + '/mxsmsystem/page/kub/huodongitemcopy/kubHuodongitemcopy/import/template?' + requestParams
export const downloadActivityItemTemplate = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/huodongitemcopy/kubHuodongitemcopy/import/template?' + requestParam
}



/* 运营动作记录数据 */

/* 店铺 */
// 列表
export const requestOperateStoreList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/operationshop/kubOperationshop/list', params)
}
// 导入Excel
// export const importOperateStoreExcel = httpUrl + '/mxsmsystem/page/kub/operationshopcopy/kubOperationshopcopy/import?' + requestParams
export const importOperateStoreExcel = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/operationshopcopy/kubOperationshopcopy/import?' + requestParam
}
// 下载模板
// export const downloadOperateStoreTemplate = httpUrl + '/mxsmsystem/page/kub/operationshopcopy/kubOperationshopcopy/import/template?' + requestParams
export const downloadOperateStoreTemplate = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/operationshopcopy/kubOperationshopcopy/import/template?' + requestParam
}

/* 单品 */
// 列表
export const requestOperateItemList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/operationitem/kubOperationitem/list', params)
}
// 导入Excel
// export const importOperateItemExcel = httpUrl + '/mxsmsystem/page/kub/operationitemcopy/kubOperationitemcopy/import?' + requestParams
export const importOperateItemExcel = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/operationitemcopy/kubOperationitemcopy/import?' + requestParam
}
// 下载模板
// export const downloadOperateItemTemplate = httpUrl + '/mxsmsystem/page/kub/operationitemcopy/kubOperationitemcopy/import/template?' + requestParams
export const downloadOperateItemTemplate = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/operationitemcopy/kubOperationitemcopy/import/template?' + requestParam
}



/* 销售目标数据 */
// 列表
export const requestSalesList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/target/kubSalesTarget/list', params)
}
// 导入Excel
// export const importSalesExcel = httpUrl + '/mxsmsystem/page/kub/targetcopy/kubSalesTargetcopy/import?' + requestParams
export const importSalesExcel = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/targetcopy/kubSalesTargetcopy/import?' + requestParam
}
// 下载模板
// export const downloadSalesTemplate = httpUrl + '/mxsmsystem/page/kub/targetcopy/kubSalesTargetcopy/import/template?' + requestParams
export const downloadSalesTemplate = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/targetcopy/kubSalesTargetcopy/import/template?' + requestParam
}



/* 竞争数据 */
// 列表
export const requestCompeteList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/contendone/kubContendOne/list', params)
}
// 导入Excel
// export const importCompeteExcel = httpUrl + '/mxsmsystem/page/kub/contendonecopy/kubContendOnecopy/import?' + requestParams
export const importCompeteExcel = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/contendonecopy/kubContendOnecopy/import?' + requestParam
}
// 下载模板
// export const downloadCompeteTemplate = httpUrl + '/mxsmsystem/page/kub/contendonecopy/kubContendOnecopy/import/template?' + requestParams
export const downloadCompeteTemplate = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/contendonecopy/kubContendOnecopy/import/template?' + requestParam
    // return console.log(username, token, requestParam)
}


/* 行业数据-生意参谋市场行情行业大盘数据 */
// 列表
export const requestIndustryList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/contendtwo/kubContendTwo/list', params)
}
// 导入Excel
// export const importIndustryExcel = httpUrl + '/mxsmsystem/page/kub/contendtwocopy/kubContendTwocopy/import?' + requestParams
export const importIndustryExcel = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/contendtwocopy/kubContendTwocopy/import?' + requestParam
    // return console.log(username, token, requestParam)
}
// 下载模板
// export const downloadIndustryTemplate = httpUrl + '/mxsmsystem/page/kub/contendtwocopy/kubContendTwocopy/import/template?' + requestParams
export const downloadIndustryTemplate = () => {
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let requestParam = 'username=' + username + '&token=' + token
    return httpUrl + '/mxsmsystem/page/kub/contendtwocopy/kubContendTwocopy/import/template?' + requestParam
    // return console.log(username, token, requestParam)
}