import { getRequest, httpUrl } from '@/utils/network'

// 保存渠道费用
export const saveChannelCost = params => {
    return getRequest( httpUrl + '/dfapi/page/kub/structurecost/kubFiveStructureCost/save', params )
}

// 客户层级导入
export const importCustomerCost = httpUrl + '/dfapi/page/kub/category/kubFiveCategory/import'

// 客户地址导入
export const importCustomerAddress = httpUrl + '/dfapi/page/kub/address/kubFiveCategoryAddress/import'

// 商品销售数据
export const goodsInterface = {
    // 商品销售数据导入接口
    importGoodsExcel: httpUrl + '/dfapi/page/kub/informationscopy/kubInformationscopy/import',
    // 商品销售数据下载模板接口
    downloadGoodsTemplate: httpUrl + '/dfapi/page/kub/informationscopy/kubInformationscopy/import/template',
    // 商品销售数据查看接口
    requestGoodsList: params => {
        return getRequest(httpUrl + '/dfapi/page/kub/informations/kubInformations/list', params)
    }
}

// 生意参谋
export const industryInterface = {
    // 生意参谋导入接口
    importIndustryExcel: httpUrl + '/dfapi/page/kub/operationacopy/kubOperationacopy/import',
    // 生意参谋下载模板接口
    downloadIndustryTemplate: httpUrl + '/dfapi/page/kub/operationacopy/kubOperationacopy/import/template',
    // 生意参谋查看接口
    requestIndustryList: params => {
        return getRequest(httpUrl + '/dfapi/page/kub/operationa/kubOperationa/list', params)
    }
}
