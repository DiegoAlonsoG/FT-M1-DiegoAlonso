
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor. 

// SIN VAR EJECUTA Y CON VAR DETERMINA

```javascript
x = 1; // determina que x es igual 1
var a = 5; // determina que a es igual a 5
var b = 10; // determina que b es igual a 10
var c = function(a, b, c) { // determina la función c, con argumentos a, b y c
  var x = 10; // determina que x es igual a 10 DENTRO DE LA FUNCION c
  console.log(x); // DEVUELVE x de c, que es 10
  console.log(a); // DEVUELVE el argumento a de c
  var f = function(a, b, c) { // determina la función f dentro de la función c con argumentos a, b y c
    b = a; // el argumento b será igual al argumento a
    console.log(b); // DEVUELVE el argumento b, que ya cambió a a
    b = c; // el argumento b, ahora será igual al argumento c
    var x = 5; //determina una variable x dentro de f dentro de c
  }
  f(a,b,c); // ejecuta la función f con argumentos a, b y c
  console.log(b); // DEVUELVE el valor b (argumento de c, que no ha cambiado)
}
c(8,9,10); // DEBERIA CORRER C, DETERMINAR F Y LUEGO CORRER F Y DEVOLVER EL CONSOLE.LOG
// 10
// 8
// 8
// 9
console.log(b); // CORRE LA VARIABLE B, FUERA DE FUNCION C
// 10
console.log(x); // CORRE LA VARIABLE X, FUERA DE C
// 1
```

```javascript // me falta saber la diferencia entre Uncaught ReferenceError: bar is not defined y undefined
console.log(bar); // undefined
console.log(baz); // undefined
foo(); // undefined
function foo() { console.log('Hola!'); } // declara la función foo
var bar = 1; // declara la variable bar
baz = 2; // devuelve 2
```

```javascript
var instructor = "Tony"; // determina la variable
if(true) { // ejecuta la funcion if true
    var instructor = "Franco"; // cambia variable instructor por el string Franco, porque se declara con VAR
}
console.log(instructor); // devuelve Franco porque se ejecutó el if
```

```javascript
var instructor = "Tony"; // declara la variable instructor
console.log(instructor); // devuelve la variable instructor - Tony
(function() { // ejecuta la función
   if(true) { // ejecuta el if
      var instructor = "Franco"; // declara la variable instructor dentro de la función
      console.log(instructor); // devuelve la variable instructor dentro de la función - Franco
   }
})();
console.log(instructor); // devuelve instructor global - Tony
```

```javascript
var instructor = "Tony"; // declara la variable instructor = tony
let pm = "Franco"; // declara la variable pm = franco
if (true) { // ejecuta el true de esta función if
    var instructor = "The Flash"; // declara instructor the flash dentro del if
    let pm = "Reverse Flash"; // declara pm dentro del if
    console.log(instructor); // devuelve the flash
    console.log(pm); // devuelve reverse flash
}
console.log(instructor); // 
console.log(pm);
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2 coercion identifica el 4 como numero.
"4px" - 2 // NaN coercion no identifica 4px como numero porque tiene caracteres.
7 / 0 // infinity
{}[0] // [0] porque lo unico real es el arreglo. el objeto vacio es undefined.
parseInt("09") // 9 porque parseIntpasa lo que le demos, a un numero entero. devolvería 9.
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // rpta: 23 // 1ro 3 concatena con 3, luego 33 menos 10.suma concatena y menos opera
3>2>1
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // und
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // no devuelve nada
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // aurelio

var test = obj.prop.getFullname;

console.log(test()); // juanp
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
