import { http } from '@/utils/http'

<<<<<<< HEAD
/**
* 获取城市索引
*/
=======
>>>>>>> a9aef6c5f5db80cc9099a7b4d6da17d5dd035cc7
export const postCityIndexAPI = (data) => {
    return http({
        method: 'POST',
        url: '/api/service-location/grayapi/global-area',
		data
    })
}