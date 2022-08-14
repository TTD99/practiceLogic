//Bài 19: Tính S(n) = 1 + x + x^3/3! + x^5/5! + … + x^(2n+1)/(2n+1)!
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var result = 1;

var y = 1;

for (var i = 1; i <= n; i++) {
  var x = 2;
  x = x ** (2 * i + 1);
  var M = i * 2 + 1;
  y = y * M * (M - 1);
  result = result + x / y;
}

console.log(result);
