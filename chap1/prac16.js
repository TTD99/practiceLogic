//Bài 16: Tính S(n) = x + x^2/1 + 2 + x^3/1 + 2 + 3 + … + x^n/1 + 2 + 3 + …. + N
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var result = 0;

var y = 0;
for (var i = 1; i <= n; i++) {
  var x = 2;
  x = x ** i;
  y = y + i;
  result = result + x / y;
}

console.log(result);
