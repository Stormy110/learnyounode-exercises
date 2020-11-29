const fs = require("fs")

let file = fs.readFileSync(process.argv[2])

let stringFile = file.toString()

let array = stringFile.split('\n')

console.log(array.length - 1)