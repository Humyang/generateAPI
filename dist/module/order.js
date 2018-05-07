
    // 订单管理
    import ajax from '../ajax.js'
    export default {
        collection(obj) {
           return ajax.commonApi("post", "X", "/order/collection", obj)
        },collectionWx(obj) {
           return ajax.commonApi("post", "X", "/order/collection-wx", obj)
        },create(obj) {
           return ajax.commonApi("post", "X", "/order/create", obj)
        },createWx(obj) {
           return ajax.commonApi("post", "X", "/order/create-wx", obj)
        },detail(obj) {
           return ajax.commonApi("get", "X", "/order/detail", obj)
        },list(obj) {
           return ajax.commonApi("get", "X", "/order/list", obj)
        },listAmount(obj) {
           return ajax.commonApi("get", "X", "/order/list-amount", obj)
        },shopInfoByCode(obj) {
           return ajax.commonApi("get", "X", "/order/shop-info-by-code", obj)
        },shopInfoById(obj) {
           return ajax.commonApi("get", "X", "/order/shop-info-by-id", obj)
        }
    }