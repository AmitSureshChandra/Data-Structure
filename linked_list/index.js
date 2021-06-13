function Node(data = null, next = null, prev = null) {
    this.data = data
    this.next = next
    this.prev = prev
}

Node.prototype.setData = function (data) {
    this.data = data
}

Node.prototype.setNext = function (next) {
    this.next = next
}

Node.prototype.setPrev = function (prev) {
    this.prev = prev
}

function linkList() {
    // this is first node
    this.node = null
    this.length = 0
}

linkList.prototype.size = function() {
    return this.length
}

linkList.prototype.incrementLength = function() {
    return this.length++
}

linkList.prototype.decrementLength = function() {
    return this.length--
}

linkList.prototype.unshift = function(node){

    this.incrementLength()

    if (this.size() == 1) {
        this.node = node
        return
    }

    this.node.prev = node
    node.next = this.node
    this.node = node
}

linkList.prototype.shift = function(){
    this.decrementLength()
    this.node = this.node.next
    this.node.prev = null
}

linkList.prototype.lastNode = function () {
    let currentNode = this.node
    for (let index = 0; index < this.size() -2; index++) {
        currentNode = currentNode.next
    }
    return currentNode;
}

linkList.prototype.push = function(node){
    this.incrementLength()
    let lastNode = this.lastNode()
    lastNode.next = node
    node.prev = lastNode
}

linkList.prototype.addNode = function(pos, node){

    if (pos > this.size()) {
        throw "index Out of Bound";
    }

    if (pos === 0) {
        this.unshift(node);
        return;
    }

    if (pos === this.size()) {
        this.push(node)
        return;
    }

    let currentNode = this.node
    for (let index = 0; index < pos - 1; index++) {
        currentNode = currentNode.next
    }
    this.incrementLength()
    let nextNode = currentNode.next
    currentNode.next = node
    node.prev = currentNode
    node.next = nextNode
    nextNode.prev = node
}

let linklist = new linkList()

node = new Node(20)

linklist.unshift(node)
linklist.unshift(new Node(-1))
linklist.unshift(new Node(-111))
linklist.unshift(new Node(-11111))
linklist.shift()

linklist.addNode(3,new Node(3));
console.dir(linklist, {depth: 4});