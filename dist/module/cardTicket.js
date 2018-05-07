
    // 卡券管理
    import ajax from '../ajax.js'
    export default {
        selectAll(obj) {
           return ajax.commonApi("get", "X", "/cardTicket/selectAll", obj)
        }
    }