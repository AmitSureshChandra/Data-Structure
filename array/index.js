function arrayOperation(){
    this.array = []
    this.length = 0
}

// item pos start from 0

arrayOperation.prototype.size = function () {
    return this.length
}

// insert item at pos
arrayOperation.prototype.insert =  function(pos,item){
    for (let i= this.size(); i > pos ; i--){
        this.setValue(i,this.valueAt(i-1))
    }
    this.setValue(pos,item)
    this.incrementLength()
}

// update item at index
arrayOperation.prototype.setValue = function (pos, item){
    this.array[pos] = item
}

//increment length
arrayOperation.prototype.incrementLength = function (){
    return ++this.length;
}

// decrement length
arrayOperation.prototype.decrementLength = function () {
    return --this.length;
}

// insert item at index 0
arrayOperation.prototype.unshift = function (item) {
    this.insert(0,item)
}

// delete item at index 0
arrayOperation.prototype.shift = function (){

}

// insert item at last index
arrayOperation.prototype.append = function (item){

}

// delete item at last index
arrayOperation.prototype.pop = function (){

}

// return index of item
arrayOperation.prototype.indexOf = function (item){

}

arrayOperation.prototype.valueAt = function (index){
    if (this.array.hasOwnProperty(index))
        return this.array[index];
    throw "Don't have property on array"
}

//remove element at index
arrayOperation.prototype.removeAt = function (index){
    for (let i = index; i< this.size(); i++){
        this.setValue(index, this.valueAt(index + 1))
    }
    this.deleteAt(this.size() - 1)
    this.decrementLength()
}

arrayOperation.prototype.deleteAt = function (pos){
    delete this.array[pos];
}

arrayOperation.prototype.removeItem = function (item){

}

arr = new arrayOperation()
arr.insert(0,20)
arr.unshift(30)
console.log(arr)