module.exports = function reverse (n) {
    let str = n.toString()
    let res = '';
    for (let i = str.length-1; i >= 0; i--) {
        if (Number.isInteger(Number(str[i]))) res += str[i]
    }
    return +res
}