// BST - Binary Search Tree

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

    setL(l) {
        this.l = l
    }
}


class BST{

    // possible modes 'LVR' , 'RVL', & etc
    static DFS_MODE = 'LVR'

    constructor(root = null){
        this.root = root
    }

    checkUniqueKey(node1,node2){
        if (node1.data === node2.data) {
            throw 'Only single unique key is possible'
        }
    }

    dfsTraversal(node = null){
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


bst = new BST(new Node(-1))
bst.add(new Node(10))
bst.add(new Node(-10))
bst.add(new Node(100))
bst.dfsTraversal()
console.dir(bst, {depth: 4});