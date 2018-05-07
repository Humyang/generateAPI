
    // 用户权限体系
    import ajax from '../ajax.js'
    export default {
        contactUs(obj) {
           return ajax.commonApi("get", "X", "/user/contactUs", obj)
        },loginOpenId(obj) {
           return ajax.commonApi("get", "X", "/user/login-openId", obj)
        },mobileLogin(obj) {
           return ajax.commonApi("post", "X", "/user/mobileLogin", obj)
        },modifyMobile(obj) {
           return ajax.commonApi("post", "X", "/user/modifyMobile", obj)
        },modifyPass(obj) {
           return ajax.commonApi("post", "X", "/user/modifyPass", obj)
        },openid(obj) {
           return ajax.commonApi("get", "X", "/user/oauth/code/openid", obj)
        },code(obj) {
           return ajax.commonApi("get", "X", "/user/oauth/wx/code", obj)
        },redirect(obj) {
           return ajax.commonApi("get", "X", "/user/redirect", obj)
        },{param}(obj) {
           return ajax.commonApi("get", "X", "/user/redirect/{method}/{param}", obj)
        },refreshToken(obj) {
           return ajax.commonApi("post", "X", "/user/refreshToken", obj)
        },register(obj) {
           return ajax.commonApi("post", "X", "/user/register", obj)
        },sendVerifCode(obj) {
           return ajax.commonApi("post", "X", "/user/sendVerifCode", obj)
        },uNameLogin(obj) {
           return ajax.commonApi("post", "X", "/user/uNameLogin", obj)
        },uploadImageSign(obj) {
           return ajax.commonApi("get", "X", "/user/upload-image-sign", obj)
        },verifCurrMobile(obj) {
           return ajax.commonApi("post", "X", "/user/verifCurrMobile", obj)
        },verifyPass(obj) {
           return ajax.commonApi("post", "X", "/user/verifyPass", obj)
        },verify_invite_code(obj) {
           return ajax.commonApi("post", "X", "/user/verify_invite_code", obj)
        },sign(obj) {
           return ajax.commonApi("get", "X", "/user/wechat/js/sign", obj)
        }
    }