import { http } from '@/utils/http'

/**
* 获取城市索引
*/
export const postCityIndexAPI = (data) => {
    return http({
        method: 'POST',
        url: '/api/service-location/grayapi/global-area',
		data
    })
}