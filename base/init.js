// read from console
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// read using inquirer
const inquirer = require('inquirer')

module.exports = {
    readLine,
    inquirer
}