// Bài 11: Tính S(n) = 1 + 1.2 + 1.2.3 + … + 1.2.3….N
var promptN = require("prompt-sync")();
var n = promptN("Enter your N: ");

var P = 1;
var result = 0;
for (var i = 1; i <= n; i++) {
  P = P * i;
  result = result + P;
}

console.log(result);
