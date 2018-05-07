
    // 缴费模版模块
    import ajax from '../ajax.js'
    export default {
        add(obj) {
           return ajax.commonApi("post", "X", "/payment-template/add", obj)
        },del(obj) {
           return ajax.commonApi("get", "X", "/payment-template/del", obj)
        },download(obj) {
           return ajax.commonApi("get", "X", "/payment-template/download", obj)
        },getById(obj) {
           return ajax.commonApi("get", "X", "/payment-template/get-by-id", obj)
        },getByMerchant(obj) {
           return ajax.commonApi("post", "X", "/payment-template/get-by-merchant", obj)
        },getByName(obj) {
           return ajax.commonApi("post", "X", "/payment-template/get-by-name", obj)
        },list(obj) {
           return ajax.commonApi("post", "X", "/payment-template/list", obj)
        },modify(obj) {
           return ajax.commonApi("post", "X", "/payment-template/modify", obj)
        },upload(obj) {
           return ajax.commonApi("post", "X", "/payment-template/upload", obj)
        }
    }