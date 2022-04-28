var cache = {};
const cb = function(x) {
  if (cache.hasOwnProperty(x)) {
    return cache.x;
  }
  var oper = 2*x;
  cache.x = oper;
  return oper;
}



var cache = {};  
return function(x) {
  if (cache.hasOwnProperty(x)) {
    return cache[x];
  }
  cache[x] = cb(x); // cb(x) ES EL RESULTADO!
  return cache[x];
}