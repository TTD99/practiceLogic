// Bài 15: Tính S(n) = 1 + 1/1 + 2 + 1/ 1 + 2 + 3 + ….. + 1/ 1 + 2 + 3 + …. + N
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var result = 0;
var x = 0;
for (var i = 1; i <= n; i++) {
  x = x + i;
  result = result + 1 / x;
}

console.log(result);
