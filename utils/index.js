function pathToApiName(path) {

    let arr = path.split('/')

    let last = arr.pop()


    let nameSplit = last.split('-')

    let first = nameSplit.shift()

    nameSplit = nameSplit.map(item => {
        let ritem = [...item]

        ritem[0] = ritem[0].toUpperCase()
        return ritem.join('')
    })

    let res = first + nameSplit.join('')

    return res
}

function nameToUpperCase(name) {
    let nameSplit = name.split('-')

    let first = nameSplit.shift()

    nameSplit = nameSplit.map(item => {
        let ritem = [...item]

        ritem[0] = ritem[0].toUpperCase()
        return ritem.join('')
    })

    let res = first + nameSplit.join('')

    return res
}

function pathToModuleName(path) {
    // console.log(path)
    let arr = path.split('/')
    console.log(arr[1])
    return arr[1]
}

function modelArrToStr(modelArr) {
    let modelStr = ''
    modelArr.forEach(item => {

    });
}
module.exports = {
    pathToApiName,
    pathToModuleName,
    nameToUpperCase
}