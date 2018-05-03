import ajax from '../ajax.js'
export default {
    api1(obj) {
        return ajax.commonApi("post", "JSON", "/plan/modify", obj)
    }
}