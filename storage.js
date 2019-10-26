/*
* 缓存处理
*/
const Storage = {
    //设置session
    sessionSet: function (name, data) {
        sessionStorage.removeItem(name, data)
        sessionStorage.setItem(name, JSON.stringify(data))
    },
    //获取session
    sessionGet: function (name, data) {
        return JSON.parse(sessionStorage.getItem(name))
    },
    //清楚session
    sessionRemove: function (name) {
        sessionStorage.removeItem(name)
    },
    //设置local
    localSet: function (name, data) {
        localStorage.removeItem(name, data)
        localStorage.setItem(name, JSON.stringify(data))
    },
    //获取local
    localGet: function (name) {
        return JSON.parse(localStorage.getItem(name))
    },
    //清除缓存
    localRemove: function (name) {
        localStorage.removeItem(name)
    }
}

export default Storage
