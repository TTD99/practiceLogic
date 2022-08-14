//Bài 17: Tính S(n) = x + x^2/2! + x^3/3! + … + x^n/N!
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var result = 0;

var y = 1;
for (var i = 1; i <= n; i++) {
  var x = 2;
  x = x ** i;
  y = y * i;
  result = result + x / y;
}

console.log(result);
