// 聚合码管理
import ajax from '../ajax.js'
export default {
    bindToShop(obj) {
        return ajax.commonApi("post", "X", "/aggcode/bind-to-shop", obj)
    },
    listByMerchant(obj) {
        return ajax.commonApi("post", "X", "/aggcode/list-by-merchant", obj)
    },
    removeBind(obj) {
        return ajax.commonApi("post", "X", "/aggcode/remove-bind", obj)
    },
    stoppingRequest(obj) {
        return ajax.commonApi("post", "X", "/aggcode/stopping-request", obj)
    }
}