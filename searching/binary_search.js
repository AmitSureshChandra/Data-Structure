let arr = [22,23,25,26,35,39,42,45,48,49];
let searchValue = 49;

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

console.log(`${searchValue} found at  ${binarySearch(arr,searchValue,0,arr.length - 1)}`);