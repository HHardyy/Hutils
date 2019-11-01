/*
*  hardy 2019-10 30
*  缓存
*/
class Storage {
    constructor() {
        this._sessionStorage = window.sessionStorage
        this._localStorage = window.localStorage
    }
    _getSession(name) {
        return JSON.parse(this._sessionStorage.getItem(name))
    }
    _setSession(name, payload) {
        this._sessionStorage.removeItem(name.payload)
        this._sessionStorage.setItem(name, JSON.stringify(payload))
    }
    _rmSession(name) {
        this._sessionStorage.removeItem(name)
    }
    _getLocal(name) {
        return JSON.parse(this._localStorage.getItem(name))
    }
    _setLocal(name, payload) {
        this._localStorage.removeItem(name, payload)
        this._localStorage.setItem(name, JSON.stringify(payload))
    }
    _rmLocal(name) {
        this._localStorage.removeItem(name)
    }
}

let _sto = new Storage()

export default _sto
