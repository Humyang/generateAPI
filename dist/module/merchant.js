
    // 商户管理
    import ajax from '../ajax.js'
    export default {
        addBind(obj) {
           return ajax.commonApi("post", "X", "/merchant/add-bind", obj)
        },addMerchant(obj) {
           return ajax.commonApi("post", "X", "/merchant/add-merchant", obj)
        },getMerchant(obj) {
           return ajax.commonApi("post", "X", "/merchant/get-merchant", obj)
        },getMerchantImage(obj) {
           return ajax.commonApi("get", "X", "/merchant/get-merchant-image", obj)
        },getMerchantInfo(obj) {
           return ajax.commonApi("post", "X", "/merchant/get-merchant-info", obj)
        },getMerchantList(obj) {
           return ajax.commonApi("post", "X", "/merchant/get-merchant-list", obj)
        },getMerchantNearest(obj) {
           return ajax.commonApi("post", "X", "/merchant/get-merchant-nearest", obj)
        },getMerchantStatus(obj) {
           return ajax.commonApi("post", "X", "/merchant/get-merchant-status", obj)
        },getMerchantStatusUpdate(obj) {
           return ajax.commonApi("post", "X", "/merchant/get-merchant-status-update", obj)
        },getMerchantLogo(obj) {
           return ajax.commonApi("get", "X", "/merchant/getMerchantLogo", obj)
        },modifyMerchantPwd(obj) {
           return ajax.commonApi("post", "X", "/merchant/modify-merchant-pwd", obj)
        },updateMerchantNearest(obj) {
           return ajax.commonApi("post", "X", "/merchant/update-merchant-nearest", obj)
        },uploadMerchantImage(obj) {
           return ajax.commonApi("post", "X", "/merchant/upload-merchant-image", obj)
        },verifyMerchantPwd(obj) {
           return ajax.commonApi("post", "X", "/merchant/verify-merchant-pwd", obj)
        }
    }