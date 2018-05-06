// 获取 rawdata
let raw = require('./example_raw').raw
var fs = require('fs')

var pathToModuleName = require('./utils/index').pathToModuleName


// var path requires('path')
let model = require('./template/module/module.js')
    // console.log(raw)

    let moduleNameArray=[]
// 遍历模块
raw.forEach(item => {
    // console.log(item.moduleName)
    // 遍历api接口



    let modelFileContent = model.getModuleContent(item)
        // 生成文件内容
        // console.log(item.apiArray[0].path)
    let moduleName =pathToModuleName(item.apiArray[0].path)
    fs.writeFile(__dirname + "//dist//module//"+moduleName+".js",modelFileContent,(err)=>{
        if(err){
            console.log(err)
        }
    })
    moduleNameArray.push({moduleName,comment:item.moduleName})
    // 生成实际文件
})
// 生成 index文件
let indexContent = model.getModuleIndexContent(moduleNameArray)
fs.writeFile(__dirname + "//dist//index.js",indexContent,(err)=>{
    if(err){
        console.log(err)
    }
})

// 遍历接口

// 生成文件内容
