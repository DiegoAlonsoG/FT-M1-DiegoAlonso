function Queue() {
    this.array = []
  }
  
  Queue.prototype.enqueue = function (x) {
    return this.array.push(x)
  }
  
  Queue.prototype.dequeue = function () {
    if (this.array.length == 0) {
      return undefined
    }
    return this.array.shift()
  }
  
  Queue.prototype.size = function () {
    return this.array.length
  }

let cola1 = new Queue()
cola1.enqueue(100)