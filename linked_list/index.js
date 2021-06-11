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

linkList.prototype.unshift(node){
    node.next = this.node
    this.node = node
}

linkList.prototype.shift(){
    this.node = this.node.next
}

linkList.prototype.addNode(pos, node){

}
