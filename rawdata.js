function getApiInfo(element) {
    console.log(element)

    // 解析 model
    let models = element.querySelectorAll('.description div')
    let modelsObj = []
    models.forEach(item => {
        modelsObj.push({
            name: item.querySelector('.propName') && item.querySelector('.propName').innerHTML,
            comment: item.querySelector('.propDesc p') && item.querySelector('.propDesc p').innerHTML
        })
    })
    return {
        path: element.querySelector('.path a').text,
        type: element.querySelector('.http_method a').text,
        model: modelsObj
    }
}

function genRawData() {
    // 获取模块引用
    var moduleElement = document.querySelectorAll('#resources .resource')

    let modules = []

    moduleElement.forEach(item => {

        // 获取模块名称
        let moduleName = item.querySelectorAll('.heading .toggleEndpointList').text

        // 获取模块下接口引用

        let apiElements = item.querySelectorAll('.endpoint')
        let apiArray = []
        apiElements.forEach(aitem => {
            apiArray.push(getApiInfo(aitem))
        })
        modules.push({
            moduleName: moduleName,
            apiArray: apiArray
        })

    })


    console.log(modules)
}
genRawData()