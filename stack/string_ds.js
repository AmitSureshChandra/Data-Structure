var Stack = function(){
    this.storage = ""
}

Stack.prototype.push = function (val) {
    this.storage = this.storage.concat('***',val)
    return this.storage
}

Stack.prototype.pop = function(){
    let popped = this.storage.substr(this.storage.lastIndexOf('***'),this.storage.length);
    this.storage= this.storage.substr(0,this.storage.lastIndexOf('***'));
    return popped;
}

Stack.prototype.size = function(){
    return this.storage.length ?? 0;
}

var myWeeklyMenu = new Stack();

myWeeklyMenu.push('RedBeans')