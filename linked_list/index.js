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
    this.node = this.node.next
    this.node.prev = null
}

linkList.prototype.addNode = function(pos, node){

}

let linklist = new linkList()

node = new Node(20)

linklist.unshift(node)
linklist.unshift(new Node(-1))
linklist.unshift(new Node(-111))
linklist.unshift(new Node(-11111))
linklist.shift()
console.log(linklist);