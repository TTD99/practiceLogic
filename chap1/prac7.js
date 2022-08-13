// Bài 7: Tính S(n) = ½ + 2/3 + ¾ + …. + n / n + 1
var prompt = require("prompt-sync")();
var n = prompt("Enter your N: ");
var result = 0;
for (var i = 1; i <= n; i++) {
  result += i / (i + 1);
}

console.log(result);
