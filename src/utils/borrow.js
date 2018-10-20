import { getRequest, postRequest} from '@/utils/network'

/* 商品销售数据api */

// 列表
export const requestGoodsList = (params) => {
    return getRequest('/mxsmsystem/page/kub/information/kubInformation/list', params)
}
// 导入Excel
export const importGoodsExcel = '/mxsmsystem/page/kub/informationcopy/kubInformationcopy/import'
// 下载模板
export const downloadGoodsTemplate = '/mxsmsystem/page/kub/informationcopy/kubInformationcopy/import/template'



/* 店铺数据api */

// 列表
export const requestStoreList = (params) => {
    return getRequest('/mxsmsystem/page/kub/shop/kubShop/list', params)
}
// 导入Excel
export const importStoreExcel = '/mxsmsystem/page/kub/shopcopy/kubShopcopy/import'
// 下载模板
export const downloadStoreTemplate = '/mxsmsystem/page/kub/shopcopy/kubShopcopy/import/template'



/* 活动数据api */

/* 店铺活动api */

// 列表
export const requestActivityStoreList = (params) => {
    return getRequest('/mxsmsystem/page/kub/huodongshop/kubHuodongshop/list', params)
}
// 导入Excel
export const importActivityStoreExcel = '/mxsmsystem/page/kub/huodongshopcopy/kubHuodongshopcopy/import'
// 下载模板
export const downloadActivityStoreTemplate = '/mxsmsystem/page/kub/huodongshopcopy/kubHuodongshopcopy/import/template'

/* 单品活动api */

// 列表
export const requestActivityItemList = (params) => {
    return getRequest('/mxsmsystem/page/kub/huodongitem/kubHuodongitem/list', params)
}
// 导入Excel
export const importActivityItemExcel = '/mxsmsystem/page/kub/huodongitemcopy/kubHuodongitemcopy/import'
// 下载模板
export const downloadActivityItemTemplate = '/mxsmsystem/page/kub/huodongitemcopy/kubHuodongitemcopy/import/template'



/* 运营动作记录数据 */

/* 店铺 */
// 列表
export const requestOperateStoreList = (params) => {
    return getRequest('/mxsmsystem/page/kub/operationshop/kubOperationshop/list', params)
}
// 导入Excel
export const importOperateStoreExcel = '/mxsmsystem/page/kub/operationshopcopy/kubOperationshopcopy/import'
// 下载模板
export const downloadOperateStoreTemplate = '/mxsmsystem/page/kub/operationshopcopy/kubOperationshopcopy/import/template'

/* 单品 */
// 列表
export const requestOperateItemList = (params) => {
    return getRequest('/mxsmsystem/page/kub/operationitem/kubOperationitem/list', params)
}
// 导入Excel
export const importOperateItemExcel = '/mxsmsystem/page/kub/operationitemcopy/kubOperationitemcopy/import'
// 下载模板
export const downloadOperateItemTemplate = '/mxsmsystem/page/kub/operationitemcopy/kubOperationitemcopy/import/template'



/* 销售目标数据 */
// 列表
export const requestSalesList = (params) => {
    return getRequest('/mxsmsystem/page/kub/target/kubSalesTarget/list', params)
}
// 导入Excel
export const importSalesExcel = '/mxsmsystem/page/kub/targetcopy/kubSalesTargetcopy/import'
// 下载模板
export const downloadSalesTemplate = '/mxsmsystem/page/kub/targetcopy/kubSalesTargetcopy/import/template'



/* 竞争数据 */
// 列表
export const requestCompeteList = (params) => {
    return getRequest('/mxsmsystem/page/kub/contendone/kubContendOne/list', params)
}
// 导入Excel
export const importCompeteExcel = '/mxsmsystem/page/kub/contendonecopy/kubContendOnecopy/import'
// 下载模板
export const downloadCompeteTemplate = '/mxsmsystem/page/kub/contendonecopy/kubContendOnecopy/import/template'



/* 行业数据-生意参谋市场行情行业大盘数据 */
// 列表
export const requestIndustryList = (params) => {
    return getRequest('/mxsmsystem/page/kub/contendtwo/kubContendTwo/list', params)
}
// 导入Excel
export const importIndustryExcel = '/mxsmsystem/page/kub/contendtwocopy/kubContendTwocopy/import'
// 下载模板
export const downloadIndustryTemplate = '/mxsmsystem/page/kub/contendtwocopy/kubContendTwocopy/import/template'