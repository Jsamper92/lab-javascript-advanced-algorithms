function StackDataStructure() {
    this.MAX_SIZE = 10;
    this.stackControl = [];


}

StackDataStructure.prototype.isEmpty = function() {
    return this.stackControl.length === 0;
};

StackDataStructure.prototype.canPush = function() {
    return this.stackControl.length < this.MAX_SIZE;
};

StackDataStructure.prototype.push = function(num) {
    if (this.canPush()) {
        this.stackControl.push(num);
        return this.stackControl;
    } else {
        return "Stack Overflow";
    }
}

StackDataStructure.prototype.pop = function(num) {
    if (this.isEmpty() === true) {
        return 'Stack Underflow';
    }
    return this.stackControl.pop();
}