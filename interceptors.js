
/*
*  hardy
*  拦截器
*/
import axios from 'axios'
import _sto from './storage'
import {router} from '../main'
//请求
axios.interceptors.request.use(function (config) {
  console.log('loading...')
  config.headers.post['Content-Type'] = 'application/json'
  config.headers.put['Content-Type'] = 'application/json'

  let token = _sto._getLocal('token name')
  if(typeof token == 'object'&&token!=null){
    config.headers.Authorization = `${token}`
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

//响应
axios.interceptors.response.use(function (config) {
  console.log('loadingend!')
  return config
},err=>{
  if(err.response){
    switch (err.response.status) {
      case 401:
        router.replace({
          path:'/'
        })
        location.reload()
    }
  }
  return Promise.reject(err)
})
