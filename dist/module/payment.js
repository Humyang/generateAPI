
    // 缴费模块
    import ajax from '../ajax.js'
    export default {
        jft(obj) {
           return ajax.commonApi("post", "X", "/payment/jft", obj)
        },jftWx(obj) {
           return ajax.commonApi("post", "X", "/payment/jft-wx", obj)
        }
    }