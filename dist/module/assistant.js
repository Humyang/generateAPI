
    // 店员模块
    import ajax from '../ajax.js'
    export default {
        afterLogin(obj) {
           return ajax.commonApi("get", "X", "/assistant/after-login", obj)
        },clockIn(obj) {
           return ajax.commonApi("post", "X", "/assistant/clock-in", obj)
        },clockOut(obj) {
           return ajax.commonApi("post", "X", "/assistant/clock-out", obj)
        },demotion(obj) {
           return ajax.commonApi("post", "X", "/assistant/demotion", obj)
        },detail(obj) {
           return ajax.commonApi("get", "X", "/assistant/detail", obj)
        },detailOpenId(obj) {
           return ajax.commonApi("post", "X", "/assistant/detail-openId", obj)
        },list(obj) {
           return ajax.commonApi("get", "X", "/assistant/list", obj)
        },exists(obj) {
           return ajax.commonApi("get", "X", "/assistant/mobile/exists", obj)
        },modifyName(obj) {
           return ajax.commonApi("post", "X", "/assistant/modify-name", obj)
        },exists(obj) {
           return ajax.commonApi("get", "X", "/assistant/open-id/exists", obj)
        },orderList(obj) {
           return ajax.commonApi("get", "X", "/assistant/order-list", obj)
        },orderOverview(obj) {
           return ajax.commonApi("get", "X", "/assistant/order-overview", obj)
        },promote(obj) {
           return ajax.commonApi("post", "X", "/assistant/promote", obj)
        },register(obj) {
           return ajax.commonApi("post", "X", "/assistant/register", obj)
        },registerCode(obj) {
           return ajax.commonApi("post", "X", "/assistant/register-code", obj)
        },registerCodeInfo(obj) {
           return ajax.commonApi("get", "X", "/assistant/register-code-info", obj)
        },remove(obj) {
           return ajax.commonApi("post", "X", "/assistant/remove", obj)
        },removeBinding(obj) {
           return ajax.commonApi("post", "X", "/assistant/remove-binding", obj)
        },subscribe(obj) {
           return ajax.commonApi("get", "X", "/assistant/subscribe", obj)
        }
    }