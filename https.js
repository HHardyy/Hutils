/*
*  hardy
*  request
*/

import axios from 'axios'

let $http={get:'',post:''}

$http.post = function (api, params) {
  return new Promise((resolve, reject) => {
    axios.post(api, params).then(res => {
      resolve(res)
    }).catch(res => {
      reject(res)
    })
  })
}

$http.get = function (api, params) {
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
export default $http
