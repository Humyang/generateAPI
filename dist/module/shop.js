
    // 门店模块
    import ajax from '../ajax.js'
    export default {
        addShop(obj) {
           return ajax.commonApi("post", "X", "/shop/add-shop", obj)
        },existsManager(obj) {
           return ajax.commonApi("get", "X", "/shop/exists-manager", obj)
        },getShopInfo(obj) {
           return ajax.commonApi("post", "X", "/shop/get-shop-info", obj)
        },list(obj) {
           return ajax.commonApi("post", "X", "/shop/list", obj)
        },listByMerchant(obj) {
           return ajax.commonApi("post", "X", "/shop/list-by-merchant", obj)
        },listSimple(obj) {
           return ajax.commonApi("post", "X", "/shop/list-simple", obj)
        },searchByMerchant(obj) {
           return ajax.commonApi("post", "X", "/shop/search-by-merchant", obj)
        },searchShopList(obj) {
           return ajax.commonApi("post", "X", "/shop/search-shop-list", obj)
        },updateShop(obj) {
           return ajax.commonApi("post", "X", "/shop/update-shop", obj)
        }
    }