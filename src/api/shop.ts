import { http } from '@/utils/http'

enum API {
    //获取门店列表地址
    SHOPLIST_URL = '/api/service-smc/grayapi/city/shop-page',
    //获取门店详情地址
    SHOPINFO_URL = '/api/service-smc/grayapi/user/closest/shop',
    //获取联名菜单
    COMBOMEALMENU_URL = '/api/service-menu/vip/grayapi/shop/combo-meal-menu'
}


/**
* 获取联名菜单数据
*/
export const getcomboMealMenuAPI = (showLocation = 2, shopId = 3291, isTakeaway = 0) => {
    return http({
        method: 'GET',
        url: API.COMBOMEALMENU_URL + `?showLocation=${showLocation}&shopId=${shopId}&isTakeaway=${isTakeaway}`
    })
}

/**
 * 获取门店列表数据
 * @param data 包含需要提交的店铺列表数据的对象
 * @returns 返回一个Promise对象，成功时携带服务器响应的数据，失败时携带错误信息
 */
export const postShopListAPI = (postShopListParam:any) => {
    return http({
        method: 'POST',
        url: API.SHOPLIST_URL,
        data:postShopListParam
    })
}

/**
 * 获取门店详情数据
 * @param data 包含要提交的店铺信息参数的对象
 * @returns 返回一个Promise对象，成功时携带服务器响应数据，失败时携带错误信息
 */
export const postShopInfoAPI = (postShopInfoParam: any ) => {
    return http({
        method: 'POST',
        url: API.SHOPINFO_URL,
        data:postShopInfoParam
    })
}
  
