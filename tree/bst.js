// BST - Binary Search Tree


/**
 * 
 * Node class for holding data, left & right for node in tree
 */
class Node {

    constructor(data = null, r = null, l = null){
        this.data = data
        this.r = r
        this.l = l
    }
    
    setData(data) {
        if (!data) {
            throw "Please enter valid data"
        }
        this.data = data
    }

    setR(r) {
        this.r = r
    }

    setL(l) {
        this.l = l
    }
}


class BST{

    // possible modes 'LVR' , 'RVL', & etc
    static DFS_MODE = 'LVR'
    
    constructor(root = null){
        this.root = root
        this.stack = []
        this.queue = []
    }

    checkUniqueKey(node1,node2){
        if (node1.data === node2.data) {
            throw 'Only single unique key is possible'
        }
    }

    bfsTraversalWithQueue(node){
        if (!node) {
            node = this.root
            this.queue.push(node)
        }
        
        if (node.l) {
            this.queue.push(node.l)
            this.bfsTraversalWithQueue(node.l)
        }
        console.log(this.queue.shift()?.data);

        if (node.r) {
            this.queue.push(node.r)
            this.bfsTraversalWithQueue(node.r)
        }
    }

    dfsTraversalWithStack(node){
        if (!node) {
            node = this.root
            this.stack.push(node)
        }
        
        if (node.l) {
            this.stack.push(node.l)
            this.dfsTraversalWithStack(node.l)
        }
        console.log(this.stack.pop()?.data);

        if (node.r) {
            this.stack.push(node.r)
            this.dfsTraversalWithStack(node.r)
        }
    }

    dfsTraversal(node = null, fn){
        if (!node) {
            node = this.root
        }

        if (node.l) {
            this.dfsTraversal(node.l)
        }

        console.log(node.data);
        
        if (node.r) {
            this.dfsTraversal(node.r)
        }
    }
    
    add(newNode, node = null){
        if (!this.root) {
            this.root = newNode
            return
        }

        if (!node) {
            node = this.root
        }
        
        this.checkUniqueKey(node, newNode)
        
        if (newNode.data > node.data) {
            if (!node.r) {
                node.r = newNode
                return
            }
            this.add(newNode, node.r)
        }else{
            if (!node.l) {
                node.l = newNode
                return
            }
            this.add(newNode, node.l)
        }
    }
}

let name = 'amit'
let bst = new BST(new Node(-1))
bst.add(new Node(10))
bst.add(new Node(-10))
bst.add(new Node(100))
// bst.dfsTraversal()
// bst.dfsTraversalWithStack()
bst.bfsTraversalWithQueue()
// console.dir(bst, {depth: 4});