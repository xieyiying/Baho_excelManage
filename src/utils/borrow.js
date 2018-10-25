import { getRequest, httpUrl } from '@/utils/network'

/* 商品销售数据api */

// 列表
export const requestGoodsList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/information/kubInformation/list', params)
}
// 导入Excel
export const importGoodsExcel = httpUrl + '/mxsmsystem/page/kub/informationcopy/kubInformationcopy/import'
// 下载模板
export const downloadGoodsTemplate = httpUrl +  '/mxsmsystem/page/kub/informationcopy/kubInformationcopy/import/template'



/* 店铺数据api */

// 列表
export const requestStoreList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/shop/kubShop/list', params)
}
// 导入Excel
export const importStoreExcel = httpUrl + '/mxsmsystem/page/kub/shopcopy/kubShopcopy/import'
// 下载模板
export const downloadStoreTemplate = httpUrl + '/mxsmsystem/page/kub/shopcopy/kubShopcopy/import/template'



/* 活动数据api */

/* 店铺活动api */

// 列表
export const requestActivityStoreList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/huodongshop/kubHuodongshop/list', params)
}
// 导入Excel
export const importActivityStoreExcel = httpUrl + '/mxsmsystem/page/kub/huodongshopcopy/kubHuodongshopcopy/import'
// 下载模板
export const downloadActivityStoreTemplate = httpUrl + '/mxsmsystem/page/kub/huodongshopcopy/kubHuodongshopcopy/import/template'

/* 单品活动api */

// 列表
export const requestActivityItemList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/huodongitem/kubHuodongitem/list', params)
}
// 导入Excel
export const importActivityItemExcel = httpUrl + '/mxsmsystem/page/kub/huodongitemcopy/kubHuodongitemcopy/import'
// 下载模板
export const downloadActivityItemTemplate = httpUrl + '/mxsmsystem/page/kub/huodongitemcopy/kubHuodongitemcopy/import/template'



/* 运营动作记录数据 */

/* 店铺 */
// 列表
export const requestOperateStoreList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/operationshop/kubOperationshop/list', params)
}
// 导入Excel
export const importOperateStoreExcel = httpUrl + '/mxsmsystem/page/kub/operationshopcopy/kubOperationshopcopy/import'
// 下载模板
export const downloadOperateStoreTemplate = httpUrl + '/mxsmsystem/page/kub/operationshopcopy/kubOperationshopcopy/import/template'

/* 单品 */
// 列表
export const requestOperateItemList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/operationitem/kubOperationitem/list', params)
}
// 导入Excel
export const importOperateItemExcel = httpUrl + '/mxsmsystem/page/kub/operationitemcopy/kubOperationitemcopy/import'
// 下载模板
export const downloadOperateItemTemplate = httpUrl + '/mxsmsystem/page/kub/operationitemcopy/kubOperationitemcopy/import/template'



/* 销售目标数据 */
// 列表
export const requestSalesList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/target/kubSalesTarget/list', params)
}
// 导入Excel
export const importSalesExcel = httpUrl + '/mxsmsystem/page/kub/targetcopy/kubSalesTargetcopy/import'
// 下载模板
export const downloadSalesTemplate = httpUrl + '/mxsmsystem/page/kub/targetcopy/kubSalesTargetcopy/import/template'



/* 竞争数据 */
// 列表
export const requestCompeteList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/contendone/kubContendOne/list', params)
}
// 导入Excel
export const importCompeteExcel = httpUrl + '/mxsmsystem/page/kub/contendonecopy/kubContendOnecopy/import'
// 下载模板
export const downloadCompeteTemplate = httpUrl + '/mxsmsystem/page/kub/contendonecopy/kubContendOnecopy/import/template'



/* 行业数据-生意参谋市场行情行业大盘数据 */
// 列表
export const requestIndustryList = (params) => {
    return getRequest(httpUrl + '/mxsmsystem/page/kub/contendtwo/kubContendTwo/list', params)
}
// 导入Excel
export const importIndustryExcel = httpUrl + '/mxsmsystem/page/kub/contendtwocopy/kubContendTwocopy/import'
// 下载模板
export const downloadIndustryTemplate = httpUrl + '/mxsmsystem/page/kub/contendtwocopy/kubContendTwocopy/import/template'