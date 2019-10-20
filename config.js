import axios from 'axios'
//请求
axios.interceptors.request.use(function (config) {
  console.log('loading...')
  return config;
}, function (error) {
  return Promise.reject(error);
});

//响应
axios.interceptors.response.use(function (config) {
  console.log('loadingend!')
  return config
}, function (error) {
  return Promise.reject(error)
})


//全局拦截
vue=>mai
import 'config.js'

react=>index
import 'config.js'


//login组件需要拦截,组件内
import 'config.js'
