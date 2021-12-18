const fs = require('fs')

function writeMessage(file, message) {
    const msg = JSON.stringify(message)
    const fileContent = fs.readFile(file, (err, data) => {if(err) return err; return data})
    const json = JSON.parse(fileContent).index.push(msg)
    fs.writeFile(file, JSON.stringify(json), (err) => {if(err) return err;})
    return fileContent
}

module.exports = writeMessage