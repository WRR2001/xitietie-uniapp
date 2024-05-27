const baseURL = 'https://go.heytea.com'

//添加拦截器
const httpInterceptor = {
    //拦截前触发
    invoke(options) {
      //1.非http开头需拼接地址
      if (!options.url.startsWith('http')) {
        options.url = baseURL + options.url
      }
      //2.请求超时
      options.timeout = 10000
      }
    }

  uni.addInterceptor('request', httpInterceptor)

  //请求函数
export const http =(options) => {
  // 返回promise对象
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      //响应成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          //提取核心数据 res.data
          resolve(res.data)
        } else {
          uni.showToast({
            icon: 'none',
            title: '请求错误',
          })
          reject(res)
        }
      },
      //响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}