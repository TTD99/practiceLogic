// Bài 12: Tính S(n) = x + x^2 + x^3 + … + x^n
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

// var promptX = require("prompt-sync")();
// var x = promptN("Enter your X: ");

var result = 0;
var x = 2;
for (var i = 1; i <= n; i++) {
  x = x ** i;
  result = result + x;
}

console.log(result);
