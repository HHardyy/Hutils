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
  let _params = params ? qs.stringify(params) : ''
  return new Promise((resolve, reject) => {
    axios.post(`${baseUrl}${api ? '/' + api : ''}`, _params).then(res => {
      resolve(res)
    }).catch(res => {
      reject(res)
    })
  })
}

http.get = function (api, params) {
  let _params = params ? qs.stringify(params) : ''
  return new Promise((resolve, reject) => {
    axios.get(`${baseUrl}${api ? '/' + api : ''}`, _params).then(res => {
      resolve(res)
    }).catch(res => {
      reject(res)
    })
  })
}

export default http
