# Hutils
常用工具 ，有空就更，欢迎指导

#### http.js 
npm install axios
```bash
//react demo
import http from '下载https.js之后放的路径/https'
class Usedemo extends Component{
  constructor(props){
    super(props)
    this.postFunc=this.postFunc.bind(this)
  }
  async postFunc(data){
       let res=await http.post(http.apilist._postapi,data)
       if(res.data.code==200){
           ....
       }
  }
  componentDidMount(){
      let data={id:1}
      this.postFunc(data)
  }
  render(){
      return(<h1>hello word</h1>)
  }
  export default Usedemo
```




# setupProxy.js
re16的代理

# redHeart.js
cp+cv，页面点击有随机颜色的红心

# react 安卓&苹果兼容微信浏览器详情页传参
let deviceInfo=navigator.platform
let id=''
const reg = RegExp(/iPhone/);
if(deviceInfo.match(reg)){   //iphone
      id=window.location.href.split("/detail/")[1].replace(/[^0-9]/ig,"");
}else{                       //Android
      id=window.location.href.split("/detail/")[1].split(':')[1];
}
