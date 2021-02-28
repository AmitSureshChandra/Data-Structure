let arr = [22,1,324,123,21,231,65,123,65765];


// return pos | -1 if not found
linearSearch = (array, searchVal) => {
    array.forEach((item,index) => {
        if (item === searchVal){
            console.log(index)
            return index;
        }
    });

    return -1;
}

console.log(linearSearch(arr,23));