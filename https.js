import axios from 'axios'
import qs from 'qs'
http.post = function (api, params) {
  return new Promise((resolve, reject) => {
    axios.post(api, qs.stringify(params)).then(res => {
      resolve(res)
    }).catch(res => {
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
      reject(res)
    })
  })
}
export default http
