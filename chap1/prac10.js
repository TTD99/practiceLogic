// Bài 10: Tính T(x, n) = x^n
var promptX = require("prompt-sync")();
var promptN = require("prompt-sync")();
var x = promptX("Enter your X: ");
var n = promptN("Enter your N: ");

var result = 1;
for (var i = 1; i <= n; i++) {
  result *= parseInt(x);
}

console.log(result);
