// Bài 13: Tính S(n) = x^2 + x^4 + … + x^2n
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var result = 0;
for (var i = 1; i <= n; i++) {
  var x = 2;
  x = x ** (2 * i);
  result = result + x;
}

console.log(result);
