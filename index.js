// 获取 rawdata
let raw = require('./example_raw').raw

let model = require('./template/module/module.js')
    // console.log(raw)

// 遍历模块
raw.forEach(item => {
    // console.log(item.moduleName)

    item.apiArray.forEach(sitem => {
            // console.log(sitem)

            let modelStr = model.getApiFormatRaw(item, sitem)
            console.log(modelStr)
        })
        // 生成文件内容


    // 生成实际文件
})


// 遍历接口

// 生成文件内容