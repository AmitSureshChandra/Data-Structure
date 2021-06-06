// for reference

let linearSearch = (array, searchVal, multi = false) => {

    let indexes = [];

    array.forEach((val, index, arr) => {
        if (val === searchVal) indexes.push(index);
    })

    if (indexes.length === 0) {
        return -1
    }

    if (multi) {
        return indexes
    }

    return indexes[0];
}

module.exports = {
    linear_search: linearSearch
}


