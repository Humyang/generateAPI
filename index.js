// 获取 rawdata

let raw = require('./example_raw').raw

var fs = require('fs')

var pathToModuleName = require('./utils/index').pathToModuleName

let model = require('./template/module/module.js')
var pathToApiName = require('./utils/index').pathToApiName

let moduleNameArray = []

// 遍历模块
fs.mkdirSync(__dirname + "//dist//test//module")
raw.forEach(item => {
    // getModuleContent 遍历模块下的 API 接口
    // 生成模块文件内容
    let modelFileContent = model.getModuleContent(item)
    // 写入 MODULE 文件
    let moduleName = pathToModuleName(item.apiArray[0].path)
    fs.writeFile(__dirname + "//dist//module//" + moduleName + ".js", modelFileContent, (err) => {
        if (err) {
            console.log(err)
        }
    })
    // 创建测试文件目录
    console.log(item.moduleName)
    // fs.mkdirSync(__dirname + "//dist//test//module")
    fs.mkdirSync(__dirname + "//dist//test//module//" + item.moduleName)
    // 按照API创建组件
    item.apiArray.forEach(item=>{
        let content = model.getTestModuleApi(moduleName,item)
        fs.writeFile(__dirname + "//dist//module//" + moduleName + "//"+pathToApiName(item.path)+".vue", modelFileContent, (err) => {
            if (err) {
                console.log(err)
            }
        })
    })
    moduleNameArray.push({ moduleName, comment: item.moduleName })

})
// 生成 index文件
let indexContent = model.getModuleIndexContent(moduleNameArray)
fs.writeFile(__dirname + "//dist//index.js", indexContent, (err) => {
    if (err) {
        console.log(err)
    }
})

// 生成测试文件

//      按模块生成
//          生成单个接口
//          生成 Index

// 生成总的入口文件
