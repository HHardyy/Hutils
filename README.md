# Hutils
没事记录的一些随笔。

### http.js 
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




### setupProxy.js
re16的代理

### redHeart.js
cp+cv，页面点击有随机颜色的红心

### react 安卓&苹果兼容微信浏览器详情页传参
```bash
let deviceInfo=navigator.platform
let id=''
const reg = RegExp(/iPhone/);
if(deviceInfo.match(reg)){   //iphone
      id=window.location.href.split("/detail/")[1].replace(/[^0-9]/ig,"");
}else{                       //Android
      id=window.location.href.split("/detail/")[1].split(':')[1];
}
```
### font-smoothing
这个属性可以使页面上的字体抗锯齿,使用后字体看起来会更清晰舒服
```bash
body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
```
### 安装 node-sass
安装的时候报类似这种错的时候
```bash
gyp ERR! stack                               
gyp ERR! stack SyntaxError: invalid syntax
gyp ERR! stack
...
```
在项目内添加一个 .npmrc 文件：
```bash
phantomjs_cdnurl=http://cnpmjs.org/downloads
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
registry=https://registry.npm.taobao.org
```
然后使用npm安装node-sass和phantomjs时都能自动从淘宝源上下载，但是在使用npm publish的时候要把 registry 这一行给注释掉，否则就会发布到淘宝源上去了。
