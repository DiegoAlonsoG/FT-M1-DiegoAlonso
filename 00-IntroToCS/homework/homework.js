"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // algo
  var suma = 0;
  for (var i=num.length-1; i>=0; i--) {
      suma = suma + num[i]*Math.pow(2,num.length-1-i)
  }
  return suma
}

function DecimalABinario(num) {
  // tu codigo aca
  var aux = []
  while (num > 0) {
    aux.unshift(num % 2)
    num = Math.floor(num / 2)
  }
  return aux.join("")
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
