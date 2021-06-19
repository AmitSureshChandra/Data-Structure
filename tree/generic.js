class Node {
    constructor(data = null, child = null){
        this.data = data
        this.child = child
    }
    
    setData(data) {
        if (!data) {
            throw "Please enter valid data"
        }
        this.data = data
    }
 
    setChild(child) {
        this.child = child
    }
}

class Generic {
    constructor(root = null){
        this.root = root        
    }

    add(node,parent){
        // pending
    }

}