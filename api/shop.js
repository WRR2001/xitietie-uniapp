<<<<<<< HEAD
import {
	http
} from '@/utils/http'

/**
 * 获取联名菜单数据
 */
export const getcomboMealMenuAPI = (showLocation = 2, shopId = 3291, isTakeaway = 0) => {
	return http({
		method: 'GET',
		url: '/api/service-menu/vip/grayapi/shop/combo-meal-menu' +
			`?showLocation=${showLocation}&shopId=${shopId}&isTakeaway=${isTakeaway}`
	})
=======
import { http } from '@/utils/http'

/**
* 获取联名菜单数据
*/
export const getcomboMealMenuAPI = (showLocation = 2, shopId = 3291, isTakeaway = 0) => {
    return http({
        method: 'GET',
        url: '/api/service-menu/vip/grayapi/shop/combo-meal-menu' + `?showLocation=${showLocation}&shopId=${shopId}&isTakeaway=${isTakeaway}`
    })
>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
}

/**
 * 获取门店列表数据
 * @param data 包含需要提交的店铺列表数据的对象
 * @returns 返回一个Promise对象，成功时携带服务器响应的数据，失败时携带错误信息
 */
export const postShopListAPI = (postShopListParam) => {
<<<<<<< HEAD
	return http({
		method: 'POST',
		url: '/api/service-smc/grayapi/city/shop-page',
		data: postShopListParam
	})
=======
    return http({
        method: 'POST',
        url: '/api/service-smc/grayapi/city/shop-page',
        data:postShopListParam
    })
>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
}

/**
 * 获取门店详情数据
 * @param data 包含要提交的店铺信息参数的对象
 * @returns 返回一个Promise对象，成功时携带服务器响应数据，失败时携带错误信息
 */
<<<<<<< HEAD
export const postShopInfoAPI = (postShopInfoParam) => {
	return http({
		method: 'POST',
		url: '/api/service-smc/grayapi/user/closest/shop',
		data: postShopInfoParam
	})
}
=======
export const postShopInfoAPI = (postShopInfoParam ) => {
    return http({
        method: 'POST',
        url: '/api/service-smc/grayapi/user/closest/shop',
        data:postShopInfoParam
    })
}
  
>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
