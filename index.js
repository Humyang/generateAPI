// 获取 rawdata
let raw = require('./example_raw').raw
var fs = require('fs')

var pathToModuleName = require('./utils/index').pathToModuleName


// var path requires('path')
let model = require('./template/module/module.js')
    // console.log(raw)

let moduleNameArray = []

// 遍历模块
raw.forEach(item => {
        // getModuleContent 遍历模块下的 API 接口
        // 生成模块文件内容
        let modelFileContent = model.getModuleContent(item)
            // 写入 MODULE 文件
            // console.log(item.apiArray[0].path)
        let moduleName = pathToModuleName(item.apiArray[0].path)
        fs.writeFile(__dirname + "//dist//module//" + moduleName + ".js", modelFileContent, (err) => {
            if (err) {
                console.log(err)
            }
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