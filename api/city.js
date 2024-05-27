import { http } from '@/utils/http'

export const postCityIndexAPI = (data) => {
    return http({
        method: 'POST',
        url: '/api/service-location/grayapi/global-area',
		data
    })
}