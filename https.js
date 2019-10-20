import axios from 'axios'
import qs from 'qs'

let baseUrl = 'http://mock-api.com/jzA7P9nk.mock/api/testaxios'

let _api = {}

let http = {
  post: '',
  get: '',
  baseUrl,
  _api
}
http.post = function (api, params) {
  return new Promise((resolve, reject) => {
    axios.post(api, qs.stringify(params)).then(res => {
      resolve(res)
    }).catch(res => {
      console.log('post走了catch' + res)
      reject(res)
    })
  })
}
http.get = function (api, params) {
  return new Promise((resolve, reject) => {
    axios.get(api, {
      params
    }).then(res => {
      resolve(res)
    }).catch(res => {
      console.log('get走了catch')
      reject(res)
    })
  })
}
export default http
