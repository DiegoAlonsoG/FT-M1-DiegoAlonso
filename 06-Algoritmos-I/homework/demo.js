function Arbol(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  Arbol.prototype.insert = function (value) {
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new Arbol(value);
      }
    }
    if (value > this.value) {
      if (this.right) {
        this.right.insert(value)
      } else {
        this.right = new Arbol(value);
      }
    }
  }
  Arbol.prototype.depthFirstForEachInOrder = function (cb) {
    if (this.left) this.left.depthFirstForEachInOrder(cb);
    cb (this.value);
    if (this.right) this.right.depthFirstForEachInOrder(cb);
  }
  
  function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    let arbolito = new Arbol(array.shift());
    let arrayFinal = []
    let cb = function (arg) {
      arrayFinal.push(arg);
    }
    while (array.length > 0) {
      arbolito.insert(array.shift())
    }
    return arrayFinal
  }