
    // 缴费通计划模块
    import ajax from '../ajax.js'
    export default {
        add(obj) {
           return ajax.commonApi("post", "X", "/plan/add", obj)
        },addSimple(obj) {
           return ajax.commonApi("post", "X", "/plan/add-simple", obj)
        },chooseTemplate(obj) {
           return ajax.commonApi("post", "X", "/plan/choose-template", obj)
        },delete(obj) {
           return ajax.commonApi("post", "X", "/plan/delete", obj)
        },get(obj) {
           return ajax.commonApi("post", "X", "/plan/get", obj)
        },list(obj) {
           return ajax.commonApi("post", "X", "/plan/list", obj)
        },listDetails(obj) {
           return ajax.commonApi("post", "X", "/plan/list-details", obj)
        },modify(obj) {
           return ajax.commonApi("post", "X", "/plan/modify", obj)
        },nearestDetail(obj) {
           return ajax.commonApi("get", "X", "/plan/nearest-detail", obj)
        },terminate(obj) {
           return ajax.commonApi("post", "X", "/plan/terminate", obj)
        }
    }