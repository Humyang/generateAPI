
    // 数据字典
    import ajax from '../ajax.js'
    export default {
        bank(obj) {
           return ajax.commonApi("get", "X", "/dict/bank", obj)
        },industry(obj) {
           return ajax.commonApi("get", "X", "/dict/industry", obj)
        },list(obj) {
           return ajax.commonApi("get", "X", "/dict/list", obj)
        },location(obj) {
           return ajax.commonApi("get", "X", "/dict/location", obj)
        },locationGet(obj) {
           return ajax.commonApi("get", "X", "/dict/location-get", obj)
        },test(obj) {
           return ajax.commonApi("get", "X", "/dict/test", obj)
        }
    }