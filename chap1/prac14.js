// Bài 14: Tính S(n) = x + x^3 + x^5 + … + x^2n + 1
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var result = 0;
for (var i = 0; i <= n; i++) {
  var x = 2;
  x = x ** (2 * i + 1);
  result = result + x;
}

console.log(result);
