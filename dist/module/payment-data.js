
    // 缴费数据模块
    import ajax from '../ajax.js'
    export default {
        add(obj) {
           return ajax.commonApi("post", "X", "/payment-data/add", obj)
        },addSingle(obj) {
           return ajax.commonApi("post", "X", "/payment-data/add-single", obj)
        },del(obj) {
           return ajax.commonApi("post", "X", "/payment-data/del", obj)
        },detail(obj) {
           return ajax.commonApi("get", "X", "/payment-data/detail", obj)
        },detailUuid(obj) {
           return ajax.commonApi("get", "X", "/payment-data/detail-uuid", obj)
        },list(obj) {
           return ajax.commonApi("post", "X", "/payment-data/list", obj)
        },listExport(obj) {
           return ajax.commonApi("get", "X", "/payment-data/list-export", obj)
        },byMerchantIdentity(obj) {
           return ajax.commonApi("post", "X", "/payment-data/list/by-merchant-identity", obj)
        },multiPlan(obj) {
           return ajax.commonApi("post", "X", "/payment-data/list/multi-plan", obj)
        },singlePlan(obj) {
           return ajax.commonApi("post", "X", "/payment-data/list/single-plan", obj)
        },singleSms(obj) {
           return ajax.commonApi("post", "X", "/payment-data/list/single-sms", obj)
        },modify(obj) {
           return ajax.commonApi("post", "X", "/payment-data/modify", obj)
        }
    }