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

    let apiStr = `
        [API_NAME](obj) {
           return ajax.commonApi("[METHOD]", "[CONTENT_TYPE]", "[PATH]", obj)
        }`
    let CONTENT_TYPE = 'X'
    apiStr = apiStr.replace(new RegExp('\\[API_NAME\\]', 'g'), pathToApiName(sitem.path))
    apiStr = apiStr.replace(new RegExp('\\[METHOD\\]', 'g'), sitem.type)
    apiStr = apiStr.replace(new RegExp('\\[CONTENT_TYPE\\]', 'g'), CONTENT_TYPE)
    apiStr = apiStr.replace(new RegExp('\\[PATH\\]', 'g'), sitem.path)


    let testStr = `
        api.[MODULE_NAME].[API_NAME]({ MODEL })
        .then(res => {
            console.log('1. api ', '[API_NAME] Success')
        }).catch(err => {
            console.log('1. api ', '[API_NAME] Error:', JSON.stringify(err))
        })
    `

    testStr = testStr.replace(new RegExp('\\[MODULE_NAME\\]', 'g'), item.moduleName)
    testStr = testStr.replace(new RegExp('\\[API_NAME\\]', 'g'), pathToApiName(sitem.path))
    testStr = testStr.replace(new RegExp('\\[MODEL\\]', 'g'), item.moduleName)

    return { apiStr, testStr }
}

function getModuleContent(item) {
    let apiArray = []
    item.apiArray.forEach(sitem => {
        let modelStr = getApiFormatRaw(item, sitem)
        apiArray.push(modelStr)
    })
    let ModuleCotent = `
    // [MODULE_NAME]
    import ajax from '../ajax.js'
    export default {
        [MODULE_CONTENT]
    }`
    ModuleCotent = ModuleCotent.replace(new RegExp('\\[MODULE_NAME\\]', 'g'), item.moduleName)
    ModuleCotent = ModuleCotent.replace(new RegExp('\\[MODULE_CONTENT\\]', 'g'), apiArray.join(','))

    // TODO
    let TestContent = `
    `

    return {
        ModuleCotent,
        TestContent
    }
}

function getModuleIndexContent(marray) {

    let importArray = marray.map(item => {

        let a = `import [MODULE_UPPER] from './module/[MODULE].js' //[COMMENT]`
        a = a.replace(new RegExp('\\[MODULE_UPPER\\]', 'g'), nameToUpperCase(item.moduleName))
        a = a.replace(new RegExp('\\[MODULE\\]', 'g'), item.moduleName)
        a = a.replace(new RegExp('\\[COMMENT\\]', 'g'), item.comment)
        return a
    })
    let moduleArray = marray.map(item => {
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

function getApiExampleRaw(moduleName, apiName, MODEL) {

    return `
            api.[MODULENAME].[APINAME]([MODEL]).then(res=>{

            }).catch(err=>{
                console.log(err)
            })
        `
}

module.exports = { getApiFormatRaw, getApiExampleRaw, getModuleContent, getModuleIndexContent }