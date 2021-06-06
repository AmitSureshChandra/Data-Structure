// linear search
const { linear_search } = require('./searching/linear_search')
const inquirer = require('inquirer')

inquirer.prompt({
    type: 'list',
    message: 'select search type',
    name: 'multi_search',

    choices: [{
        name: 'Solo',
        value: false
    },{
        name: 'Multi',
        value: true
    }]
}).then(({ multi_search }) => {
    inquirer.prompt({
        message: 'Enter array element seperated by spaces : ',
        type: 'input',
        name: 'array_string'
    })
        .then(({ array_string }) => {
            inquirer.prompt({
                message: 'Enter the value to be searched: ',
                type: 'input',
                name: 'search_val'
            })
                .then(({ search_val }) => {
                    console.log(`
                        ${ search_val } found at ${multi_search ? 'indexes' : 'index '} 
                        ${linear_search(array_string.split(" "), search_val, multi_search)}`)
                })
        })
})

// binary search
