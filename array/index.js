function arrayOperation(){
    this.array = []
    this.length = 0
}

// update item at index
arrayOperation.prototype.setValue = function (pos, item){
    this.array[pos] = item
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

// insert item at index 0
arrayOperation.prototype.unshift = function (item) {
    this.insert(0,item)
}


//increment length
arrayOperation.prototype.incrementLength = function (){
    return ++this.length;
}

// decrement length
arrayOperation.prototype.decrementLength = function () {
    return --this.length;
}

arrayOperation.prototype.checkPropertyExists = function (index){
    if (this.array.hasOwnProperty(index))
        return true;
    throw "Don't have property on array"
}

arrayOperation.prototype.valueAt = function (index){
    if (this.checkPropertyExists(index))
        return this.array[index];
}

//remove element at index
arrayOperation.prototype.removeAt = function (index){
    if (this.checkPropertyExists(index)){
        for (let i = index; i< this.size(); i++){
            this.setValue(index, this.valueAt(index + 1))
        }
        this.deleteAt(this.size() - 1)
        this.decrementLength()
    }
}


// delete item at index 0
arrayOperation.prototype.shift = function (){
    this.removeAt(0)
}
// insert item at last index

arrayOperation.prototype.append = function (item){
    this.insert(this.array.size(),item)
}

// delete item at last index
arrayOperation.prototype.pop = function (){
    this.removeAt(this.array.size() - 1)
}

// return index of item
arrayOperation.prototype.indexOf = function (item){
    for (let i = 0; i < this.size(); i++) {
        if (this.valueAt(i) === item )
            return i;
    }
    return -1;
}

// for internal use
arrayOperation.prototype.deleteAt = function (pos){
    delete this.array[pos];
}


arrayOperation.prototype.removeItem = function (item){
    let index = this.indexOf(item)
    if (index === -1) {
        throw "Item not found in array"
    }
    this.deleteAt(index);
}

let obj = new arrayOperation()