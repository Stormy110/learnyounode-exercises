const fs = require("fs")
const path = require("path")
fs.readdir(process.argv[2],(err, list)=>{
    if(err) throw err;
    let extension = (process.argv[3])
    let targetFiles = list.filter(file=>{
        return path.extname(file).toLowerCase() === ('.' + extension)
    })
    targetFiles.forEach(el=>console.log(el))
})