//Bài 18: Tính S(n) = 1 + x^2/2! + x^4/4! + … + x^2n/(2n)!
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var result = 1;

var y = 1;

for (var i = 1; i <= n; i++) {
  var x = 2;
  x = x ** (2 * i);
  var M = i * 2;
  y = y * M * (M - 1);
  result = result + x / y;
}

console.log(result);
