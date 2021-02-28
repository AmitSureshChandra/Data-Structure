// let arr = [22,1,324,123,21,231,65,123,65765];
let arr = [22,23,25,26,35,39,42,45,48,49];
let searchValue = 49;

let linearSearch = (array, searchVal) => {
    for (let i=0;i<array.length;i++){
        if (array[i] === searchVal){
            return i;
        }
    }
    return -1;
}
