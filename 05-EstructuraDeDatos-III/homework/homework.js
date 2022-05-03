'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value; // declara el valor del nodo
  this.left = null; // declara el valor de la rama de la derecha
  this.right = null; // declara el valor de la rama de la izquiera
}

BinarySearchTree.prototype.insert = function (value) { // recursividad es con la misma función 'insert'
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree (value);
    }
  }
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value)
    } else {
      this.right = new BinarySearchTree (value);
    }
  }
}

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) {
    return true }
  if (value < this.value) {
    if (!this.left) {
      return false
    } else {
      return this.left.contains(value);
    }
  } else {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
}


BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  if (!order || order === 'in-order') {
    if (this.left) this.left.depthFirstForEach(cb, order);
    cb (this.value);
    if (this.right) this.right.depthFirstForEach(cb, order);
  } else if (order === 'pre-order') {
    cb (this.value);
    if (this.left) this.left.depthFirstForEach(cb, order);
    if (this.right) this.right.depthFirstForEach(cb, order);
  } else {
    if (this.left) this.left.depthFirstForEach(cb, order);
    if (this.right) this.right.depthFirstForEach(cb, order);
    cb (this.value);
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  cb(this.value);
  if(this.left) array.push(this.left);
  if(this.right) array.push(this.right);
  let nextNode = array.shift();
  if (nextNode) nextNode.breadthFirstForEach(cb,array)
}

BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) return 1;
  if (this.left && !this.right) return 1 + this.left.size();
  if (!this.left && this.right) return 1 + this.right.size();
  if (this.left && this.right) return 1 + this.left.size() + this.right.size()
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
