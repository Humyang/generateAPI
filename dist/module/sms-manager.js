
    // 缴费通短信管理模块
    import ajax from '../ajax.js'
    export default {
        disable(obj) {
           return ajax.commonApi("post", "X", "/sms-manager/disable", obj)
        },getSmsDetail(obj) {
           return ajax.commonApi("post", "X", "/sms-manager/get-sms-detail", obj)
        }
    }