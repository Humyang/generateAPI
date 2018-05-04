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
module.exports = { pathToApiName }