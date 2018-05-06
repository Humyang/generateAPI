
    // 缴费搜索模块
    import ajax from '../ajax.js'
    export default {
        payer(obj) {
           return ajax.commonApi("post", "X", "/pay-search/item-list/payer", obj)
        },plan(obj) {
           return ajax.commonApi("post", "X", "/pay-search/item-list/plan", obj)
        },merchantList(obj) {
           return ajax.commonApi("post", "X", "/pay-search/merchant-list", obj)
        },payerList(obj) {
           return ajax.commonApi("post", "X", "/pay-search/payer-list", obj)
        }
    }