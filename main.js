// linear search
const { linear_search } = require('./searching/linear_search')
const { inquirer } = require('./base/init')

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
}).then(answer => {
    inquirer.prompt({
        message: 'Enter array element seperated by spaces : ',
        type: 'input',
        name: 'array_string'
    })
        .then((answer2) => {
            inquirer.prompt({
                message: 'Enter the value to be searched: ',
                type: 'input',
                name: 'search_val'
            })
                .then((answer3) => {
                    let multi_search = answer.multi_search !== 'solo'
                    console.log(`${ answer3.search_val } found at ${multi_search ? 'indexes' : 'index '} ${linear_search(answer2.array_string.split(" "), answer3.search_val, multi_search)}`)
                })
        })
})

// binary search