// import ajax from '../ajax.js'

// export default {

// 获取项目列表
// itemList(obj) {

// merchantId (string, optional): 商户ID ,
// mobileOrsign (string, optional): 手机号或缴费编号 ,
// page (integer, optional),
// shopId (string, optional): 门店ID ,
// size (integer, optional)

// return ajax.commonApi("post", "JSON", "/payment-data/list/by-merchant-identity", obj)
// return new Promise((reslove,reject)=>{
//     setTimeout(() => {
//         let obj = 
//             {"code":0,"errMsg":"","extra":{data:[
//                 {mobile:13422222222,item:"测试1111",amount:333,status:"已缴费"}
//             ],
//             total:20
//         }
//             }
//             console.log(obj)
//         reslove(obj)
//     }, 500);
// })
// }

// }

// 接口格式


// [API_NAME]
// [METHOD]
// [CONTENT_TYPE] X，JSON，FORM

var pathToApiName = require('../../utils/index').pathToApiName

function getApiFormatRaw(item, sitem) {
    let raw = `[API_NAME](obj) {
           return ajax.commonApi("[METHOD]", "[CONTENT_TYPE]", "[PATH]", obj)
        }`
    
    let CONTENT_TYPE = 'X'
    raw = raw.replace(new RegExp('\\[API_NAME\\]', 'g'), pathToApiName(sitem.path))
    raw = raw.replace(new RegExp('\\[METHOD\\]', 'g'), sitem.type)
    raw = raw.replace(new RegExp('\\[CONTENT_TYPE\\]', 'g'), CONTENT_TYPE)
    raw = raw.replace(new RegExp('\\[PATH\\]', 'g'), sitem.path)

    return raw
}

function getApiExampleRaw(moduleName) {
    return `
            api.[MODULENAME].[APINAME]([MODEL]).then(res=>{

            }).catch(err=>{
                console.log(err)
            })
        `
}
module.exports = { getApiFormatRaw, getApiExampleRaw }