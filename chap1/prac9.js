// Bài 9: Tính T(n) = 1 x 2 x 3…x N
var prompt = require("prompt-sync")();
var n = prompt("Enter your N: ");
var result = 1;
for (var i = 1; i <= n; i++) {
  result *= i;
}

console.log(result);
