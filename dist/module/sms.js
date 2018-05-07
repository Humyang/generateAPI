
    // 缴费通短信模块
    import ajax from '../ajax.js'
    export default {
        send(obj) {
           return ajax.commonApi("post", "X", "/sms/send", obj)
        },sendMulti(obj) {
           return ajax.commonApi("post", "X", "/sms/send-multi", obj)
        },sendPlan(obj) {
           return ajax.commonApi("post", "X", "/sms/send-plan", obj)
        },template(obj) {
           return ajax.commonApi("post", "X", "/sms/template", obj)
        }
    }