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
var nameToUpperCase = require('../../utils/index').nameToUpperCase

function getApiFormatRaw(item, sitem) {
    let raw = `[API_NAME](obj) {
           return ajax.commonApi("[METHOD]", "[CONTENT_TYPE]", "[PATH]", obj)
        }`
        // console.log(sitem.path)
    let CONTENT_TYPE = 'X'
    raw = raw.replace(new RegExp('\\[API_NAME\\]', 'g'), pathToApiName(sitem.path))
    raw = raw.replace(new RegExp('\\[METHOD\\]', 'g'), sitem.type)
    raw = raw.replace(new RegExp('\\[CONTENT_TYPE\\]', 'g'), CONTENT_TYPE)
    raw = raw.replace(new RegExp('\\[PATH\\]', 'g'), sitem.path)

    return raw
}
function getModuleContent(item){
    let apiArray = []
    item.apiArray.forEach(sitem => {
            // console.log(sitem)
            // 生成api
            let modelStr = getApiFormatRaw(item, sitem)
            // console.log(modelStr)
            apiArray.push(modelStr)
        })

    // console.log(apiArray)
    let res = `
    // [MODULE_NAME]
    import ajax from '../ajax.js'
    export default {
        [MODULE_CONTENT]
    }`
    res = res.replace(new RegExp('\\[MODULE_NAME\\]', 'g'),item.moduleName )
    res = res.replace(new RegExp('\\[MODULE_CONTENT\\]', 'g'), apiArray.join(','))
    // console.log(res)
    return res
        // console.log(apiArray.join(','))
}

function getModuleIndexContent(marray){

    let importArray =marray.map(item=>{

        let a = `import [MODULE_UPPER] from './module/[MODULE].js' //[COMMENT]`
        a = a.replace(new RegExp('\\[MODULE_UPPER\\]', 'g'), nameToUpperCase(item.moduleName))
        a = a.replace(new RegExp('\\[MODULE\\]', 'g'), item.moduleName)
        a = a.replace(new RegExp('\\[COMMENT\\]', 'g'), item.comment)
        return a
    })
    let moduleArray = marray.map(item=>{
        return nameToUpperCase(item.moduleName)
    })

    let res = `
    [IMPORT]
    export {
        [MODULE],
    }
    `

    res = res.replace(new RegExp('\\[MODULE\\]', 'g'), moduleArray.join(',\r\n'))
    res = res.replace(new RegExp('\\[IMPORT\\]', 'g'), importArray.join('\r\n'))

    return res
}

function getApiExampleRaw(moduleName,apiName,MODEL) {

    return `
            api.[MODULENAME].[APINAME]([MODEL]).then(res=>{

            }).catch(err=>{
                console.log(err)
            })
        `
}

module.exports = { getApiFormatRaw, getApiExampleRaw,getModuleContent,getModuleIndexContent }
