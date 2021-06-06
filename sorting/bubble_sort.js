let bubbleSort = (arr) => {
    let array = arr;
    for (let i = 0; i< array.length; i++){
        for (let j=0; j<array.length-1;j++){
            if (array[i] < array[j] && i !== j){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

module.exports = {
    bubble_sort: bubbleSort
}