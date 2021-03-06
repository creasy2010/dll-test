/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2019/11/26
 **/


var ffi = require('ffi')

var libfactorial = ffi.Library('./libfactorial-hu-64', {
    'factorial': [ 'uint64', [ 'int' ] ]
})

if (process.argv.length < 3) {
    console.log('Arguments: ' + process.argv[0] + ' ' + process.argv[1] + ' <max>')
    process.exit()
}

var output = libfactorial.factorial(parseInt(process.argv[2]))

console.log('Your output: ' + output)