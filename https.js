import axios from 'axios'
import qs from 'qs'

let baseUrl='http://api.hhardyy.com'

let apilist={
  _postapi:'postapi',    //postapi address
  _getapi:'getapi'       //getapi  address
}
let http={post:"",get:"",baseUrl:baseUrl,apilist:apilist}
http.post=function(api,data){
  let params=qs.stringify(data)
  return new Promise((resolve,reject)=>{
    axios.post(`${baseUrl}/${api}`,params).then(res=>{
      resolve(res)
    }).catch(res=>{
      reject(res)
    })
  })
}
http.get=function(api,data){
  let params=qs.stringify(data)
  return new Promise((resolve,reject)=>{
    axios.get(`${baseUrl}/${api}`,params).then(res=>{
      resolve(res)
    }).catch(res=>{
      reject(res)
    })
  })
}
export default http
