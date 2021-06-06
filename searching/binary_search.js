const { readLine } = require('../base/init')

// arr must be sorted in ascending sort

let binarySearch = (array,searchValue,start,end) => {
    if (start === end){
        if (array[start] === searchValue){
            return start;
        }
        return -1;
    }
    let mid = Math.ceil((end + start)/2);

    if (array[mid] === searchValue)
        return mid;

    if (array[mid] < searchValue){
        return binarySearch(array,searchValue,mid+1,end)
    }else {
        return binarySearch(array,searchValue,start,mid-1)
    }
}

module.exports = {
    binarySearch: binarySearch
}